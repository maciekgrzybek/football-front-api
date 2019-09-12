class WebSocketClass {
  constructor(url = 'ws://localhost:8889') {
    this.client = null;
    this.url = url;
    this.outcomes = [];

    this.init();

    this.getEvent = this.getEvent.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.getMarket = this.getMarket.bind(this);
  }
  init() {
    this.client = new WebSocket(this.url);
  }

  handleResponse(id, type) {
    return new Promise((resolve) => {
      const messageHandler = (message) => {
        const parsedData = JSON.parse(message.data);
        switch (parsedData.type) {
          case 'INIT':
            break;
          case 'LIVE_EVENTS_DATA':
            resolve(parsedData);
            break;
          default:
            if (parsedData.data[`${type}Id`] === id) {
              this.client.removeEventListener('message', messageHandler);
              resolve(parsedData);
            }
        }
      };
      this.client.addEventListener('message', messageHandler);
    });
  }

  getEvent(key) {
    this.client.send(JSON.stringify({ type: 'getEvent', id: key }));
    return this.handleResponse(key, 'event');
  }
  getEvents() {
    this.client.send(JSON.stringify({ type: 'getLiveEvents' }));
    return this.handleResponse();
  }
  getMarket(key) {
    this.client.send(JSON.stringify({ type: 'getMarket', id: key }));
    return this.handleResponse(key, 'market');
  }
  getOutcome(key) {
    this.client.send(JSON.stringify({ type: 'getOutcome', id: key }));
    return this.handleResponse(key, 'outcome');
  }
}

const wsClient = new WebSocketClass();

export default wsClient;
