import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/store";

import log from "../utils/logger";
import { BASE_URL_WS } from "../utils/constants/url";

const useWebSocket = () => {
  const [wsData, setWsData] = useState(false);

  const authCtx = useContext(AuthContext)

  useEffect(() => {
    const ws = new WebSocket(BASE_URL_WS);

    ws.onopen = () => log('d', `Client connected to WebSocket`);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      setWsData(data);
      log('d', `Received WebSocket Message:\n ${JSON.stringify(data.body)}`);
    };

    ws.onerror = (error) => log('dn', `WebSocket error:\n ${JSON.stringify(error)}`, authCtx.token, authCtx.resetToken);

    ws.onclose = () => log('d', `Client disconnected from WebSocket`);
     
    return () => ws.close(); 
  }, []);

  return { wsData };
}

export default useWebSocket;