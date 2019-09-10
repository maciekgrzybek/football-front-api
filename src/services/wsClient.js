class WebSocketClass {
  constructor(url = 'ws://localhost:8889') {
    this.client = null;
    this.url = url;

    this.init();

    this.getEvent = this.getEvent.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.getMarket = this.getMarket.bind(this);
  }
  init() {
    this.client = new WebSocket(this.url);
  }

  handleMessage() {
    return new Promise((resolve, reject) => {
      this.client.addEventListener('message', function _listener(message) {
        const parsedData = JSON.parse(message.data);
        switch (parsedData.type) {
          case 'INIT':
            break;
          default:
            this.data = JSON.parse(message.data);
            resolve(this.data);
            break;
        }
      });
      this.client.addEventListener('error', (error) => {
        reject(error);
      });
    });
  }

  getEvent(key) {
    this.client.send(JSON.stringify({ type: 'getEvent', id: key }));
    return this.handleMessage();
  }
  getEvents() {
    this.client.send(JSON.stringify({ type: 'getLiveEvents' }));
    return this.handleMessage();
  }
  getMarket(key) {
    this.client.send(JSON.stringify({ type: 'getMarket', id: key }));
    return this.handleMessage();
  }
  getOutcome(key) {
    this.client.send(JSON.stringify({ type: 'getOutcome', id: key }));
    return this.handleMessage();
  }
}

const wsClient = new WebSocketClass();

export default wsClient;
