import { useState } from "react";
import { fetchAxios } from "../utils/APIs/axios";

/* --------------------------------------------------------------
 * --------- Use when making API calls from a component ---------
 * -------------------------------------------------------------- */

const useAxiosFetch = () => {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);

  /** 
  * @param type get, put, post, delete
  * @param endpoint the endpoint to connect
  * @param body the body data of the request
  * @param extraHeaders any additional headers
  */
  const fetchAPI = async (type, endpoint, body=null, extraHeaders=[]) => {
    try {
      setLoading(true);
      setError(false);

      const { data, status } = await fetchAxios(type, endpoint, body, extraHeaders);
      console.log(`Fetched succeed with status ${status} and data:\n\t ${data}`);
      setData(data);
      setStatus(status);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return { fetchAPI, data, loading, status, error };
};

export default useAxiosFetch;