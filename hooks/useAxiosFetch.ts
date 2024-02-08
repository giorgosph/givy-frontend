import { useContext, useEffect, useState } from "react";

import { HttpStatusCode } from "axios";
import { AuthContext } from "../context/store";

import log from "../utils/logger";
import { fetchAxios } from "../utils/APIs/axios";
import { ApiStatusType, apiStatus } from "../utils/constants/data/apiStatus";

/* --------------------------------------------------------------
 * --------- Use when making API calls from a component ---------
 * -------------------------------------------------------------- */

/* --------- Types --------- */
type FetchPropsType = {
  type: "get" | "put" | "post" | "delete";
  endpoint: string;
  body?: object;
  authHeader?: boolean;
};

/* ------------------------- */

const useAxiosFetch = <T>() => {
  const [data, setData] = useState<T>();
  const [status, setStatus] = useState<ApiStatusType>(apiStatus.IDLE);
  const [statusCode, setStatusCode] = useState<HttpStatusCode | false>(false);

  const resetAxiosState = () => {
    setData(undefined);
    setStatusCode(false);
    setStatus(apiStatus.IDLE);
  };

  const authCtx = useContext(AuthContext);

  /**
   * Use in comppnents for API requests with predefined properties and checks
   *
   * @param type get, put, post, delete
   * @param endpoint the endpoint to connect
   * @param body the body data of the request
   * @param extraHeaders any additional headers
   */
  const fetchAPI = async (props: FetchPropsType) => {
    const { type, endpoint, body = {}, authHeader = false } = props;
    const token = authHeader ? authCtx.token || authCtx.tempToken : undefined;

    try {
      setData(undefined);
      setStatusCode(false);
      setStatus(apiStatus.LOADING);

      const { data, status } = await fetchAxios({
        type,
        endpoint,
        body,
        token,
        resetToken: authCtx.resetToken,
      });

      log({
        type: "d",
        message: `Fetched Succeed\nStatus Code: ${status}\nData:\n ${JSON.stringify(
          data
        )}`,
      });

      setData(data);
      setStatusCode(status);
      setStatus(apiStatus.SUCCESS);
    } catch (err) {
      log({ type: "w", message: `Fetched Failed\nResponse Error:\n ${err}` });
      const { data, status } = err.response;

      if (
        status === HttpStatusCode.InternalServerError ||
        status === HttpStatusCode.NotFound
      )
        alert("Server Error!\nKindly Contact Support Team");
      else if (status === HttpStatusCode.Forbidden) authCtx.logout();
      else {
        setData(data);
        setStatusCode(status);
      }
      setStatus(apiStatus.ERROR);
    }
  };

  useEffect(() => {
    return () => {
      log({ type: "d", message: `Unmounting and Clearing API State` });
      resetAxiosState();
    };
  }, []);

  return { fetchAPI, resetAxiosState, data, status, statusCode };
};

export default useAxiosFetch;
