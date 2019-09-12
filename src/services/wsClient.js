class WebSocketClass {
  constructor(url = 'ws://localhost:8889') {
    this.client = null;
    this.url = url;
    this.outcomes = [];

    this.init();

    this.getEvent = this.getEvent.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.getMarket = this.getMarket.bind(this);
    this.getMarkets = this.getMarkets.bind(this);
    this.getOutcomes = this.getOutcomes.bind(this);
    
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

  checkIfReady(callback) {
    const connectionCheck = setInterval(() => {
      if (this.client.readyState === 1) {
        clearInterval(connectionCheck);
        callback()
      }
    }, 10);
  }

  getEvent(key) {
    this.checkIfReady(() => {
      this.client.send(JSON.stringify({ type: 'getEvent', id: key }));
    });
    return this.handleResponse(key, 'event');

  }
  getEvents() {
    this.checkIfReady(() => {
      console.log('e?')
      this.client.send(JSON.stringify({ type: 'getLiveEvents' }));
    });
    return this.handleResponse();
  }
  getMarket(key) {
    this.checkIfReady(() => {
      this.client.send(JSON.stringify({ type: 'getMarket', id: key }));
    });
    return this.handleResponse(key, 'market');
  }
  getMarkets(keys) {
    return this.checkIfReady(() => {
      return Promise.all(
        keys.map((market) => {
          return this.getMarket(market);
        }));
    });

  }
  getOutcome(key) {
    this.checkIfReady(() => {
      this.client.send(JSON.stringify({ type: 'getOutcome', id: key }));
    });
    return this.handleResponse(key, 'outcome');
  }
  getOutcomes(keys) {
    return this.checkIfReady(() => {
      return Promise.all(
        keys.map((outcome) => {
          return this.getOutcome(outcome);
        }));
    })
  }
}

const wsClient = new WebSocketClass();

export default wsClient;
