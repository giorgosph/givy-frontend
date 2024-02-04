import axios from "axios";
import { REFRESH_TOKEN_EP } from "../constants/url";

/* --------- Types --------- */
type PropsType = {
  type: "get" | "put" | "post" | "delete";
  endpoint: string;
  body?: object;
  token?: string | false;
  resetToken: (token: string) => void;
};

/* ------------------------- */

/**
 * Generic axios calls
 *
 * @warning Use try/catch every time you use api()
 * @param type -> get, put, post, etc.
 */
export const fetchAxios = async (props: PropsType) => {
  const { type, endpoint, body = {}, token, resetToken = () => {} } = props;

  const options = {
    url: endpoint,
    method: type,
    data: body,
    headers: {
      Authorization: token,
      Accept: "application/json",
    },
  };

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error?.config;
      if (
        error.response &&
        (error.response?.status !== 491 || originalRequest._retry)
      )
        return Promise.reject(error);

      originalRequest._retry = true;
      const refreshResponse = await axios.post(REFRESH_TOKEN_EP);
      const token = refreshResponse.data.body;

      resetToken(token);
      originalRequest.headers["Authorization"] = token;

      return axios(originalRequest);
    }
  );

  const response = await axios(options);
  return { data: response.data, status: response.status };
};
