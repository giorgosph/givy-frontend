import { useEffect, useState } from "react";

import { BASE_URL_WS } from "../utils/constants/url";

const useWebSocket = () => {
  const [wsData, setWsData] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(BASE_URL_WS);

    ws.onopen = () => console.log('Connected to WebSocket');

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      setWsData(data);
      console.log('Received WebSocket Message:\n', data.body);
    };

    ws.onerror = (error) => console.error('WebSocket error:', error);

    return () => ws.close(); 
  }, []);

  return { wsData };
}

export default useWebSocket;