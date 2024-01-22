import { useEffect, useState } from "react";

import log from "../utils/logger";
import { fetchAxios } from "../utils/APIs/axios";
import { apiStatus } from "../utils/constants/data/apiStatus";

/* --------------------------------------------------------------
 * --------- Use when making API calls from a component ---------
 * -------------------------------------------------------------- */

const useAxiosFetch = () => {
  const [data, setData] = useState(false);
  const [status, setStatus] = useState(apiStatus.IDLE);
  const [statusCode, setStatusCode] = useState(false);

  const resetAxiosState = () => { 
    setData(false);
    setStatusCode(false);
    setStatus(apiStatus.IDLE);
  };

  // TODO -> Create Loading Skeleton

  /** 
  * @param type get, put, post, delete
  * @param endpoint the endpoint to connect
  * @param body the body data of the request
  * @param extraHeaders any additional headers
  */
  const fetchAPI = async (type, endpoint, body=null, extraHeaders=[]) => {
    try {
      setData(false);
      setStatusCode(false);
      setStatus(apiStatus.LOADING);

      const { data, status } = await fetchAxios(type, endpoint, body, extraHeaders);
      log('d', `Fetched Succeed\nStatus Code: ${status}\nData:\n ${JSON.stringify(data)}`);

      setData(data);
      setStatusCode(status);
      setStatus(apiStatus.SUCCESS);
    } catch (err) {
      log('w', `Fetched Failed\nResponse Error:\n ${err}`);

      setData(err.response?.data);
      setStatusCode(err.response?.status);
      
      setStatus(apiStatus.ERROR);
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