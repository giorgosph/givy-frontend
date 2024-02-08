import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/store";

import log from "../utils/logger";
import { BASE_URL_WS } from "../utils/constants/url";

const useWebSocket = <T>() => {
  const [wsData, setWsData] = useState<T>();

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const ws = new WebSocket(BASE_URL_WS);

    ws.onopen = () =>
      log({ type: "d", message: `Client connected to WebSocket` });

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setWsData(data);
      log({
        type: "d",
        message: `Received WebSocket Message:\n ${JSON.stringify(data.body)}`,
      });
    };

    ws.onerror = (error) => {
      log({
        type: "dn",
        message: `WebSocket error:\n ${JSON.stringify(error)}`,
        token: authCtx.token as string,
        resetToken: authCtx.resetToken,
      });
    };

    ws.onclose = () =>
      log({ type: "d", message: `Client disconnected from WebSocket` });

    return () => ws.close();
  }, []);

  return { wsData };
};

export default useWebSocket;
