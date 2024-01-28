import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/store";

import log from "../utils/logger";
import { fetchAxios } from "../utils/APIs/axios";
import { apiStatus } from "../utils/constants/data/apiStatus";

/* --------------------------------------------------------------
 * --------- Use when making API calls from a component ---------
 * -------------------------------------------------------------- */

/* --------- Types --------- */
export type FetchPropsType = {
  type: 'get' | 'put' | 'post' | 'delete';
  endpoint: string;
  body?: object;
  authHeader?: boolean;
};

/* ------------------------- */

const useAxiosFetch = () => {
  const [data, setData] = useState(false);
  const [status, setStatus] = useState(apiStatus.IDLE);
  const [statusCode, setStatusCode] = useState(false);

  const resetAxiosState = () => { 
    setData(false);
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
    const { type, endpoint, body=null, authHeader=false } = props;
    const token = authHeader ? authCtx.token || authCtx.tempToken : undefined;

    try {
      setData(false);
      setStatusCode(false);
      setStatus(apiStatus.LOADING);

      const { data, status } = await fetchAxios(type, endpoint, body, token, authCtx.resetToken);
      log('d', `Fetched Succeed\nStatus Code: ${status}\nData:\n ${JSON.stringify(data)}`);

      setData(data);
      setStatusCode(status);
      setStatus(apiStatus.SUCCESS);
    } catch (err) {
      log('w', `Fetched Failed\nResponse Error:\n ${err}`);

      setData(err.response?.data);
      setStatusCode(err.response?.status);
      setStatus(apiStatus.ERROR);

      if(err.response?.status === 500 || err.response?.status === 404) alert("Server Error!\nKindly Contact Support Team");
      else if(err.response?.status === 403) authCtx.logout();
    }
  };

  useEffect(() => {
    return () => {
      log('d', `Unmounting and Clearing API State`);
      resetAxiosState();
    };
  }, []);

  return { fetchAPI, resetAxiosState, data, status, statusCode };
};

export default useAxiosFetch;