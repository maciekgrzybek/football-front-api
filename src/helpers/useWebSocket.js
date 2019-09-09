import { useEffect, useState, useRef } from 'react';

function useWebSocket(sendDetails = {}, url = 'ws://localhost:8889') {
  const [data, setData] = useState(null);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(url);
    if (ws.current) {
      ws.current.addEventListener('open', () => {
        ws.current.send(JSON.stringify(sendDetails));
      });
      ws.current.addEventListener('message', (message) => {
        const parsedData = JSON.parse(message.data);
        switch (parsedData.type) {
          case 'INIT':
            break;
          case 'LIVE_EVENTS_DATA':
            setData(JSON.parse(message.data));
            break;
          default:
            break;
        }
      });
    }
    return () => ws.current.close();
  }, []);
  return data;
}

export default useWebSocket;
