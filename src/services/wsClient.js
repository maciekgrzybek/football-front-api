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

  checkIfReady() {
    return new Promise((resolve, reject) => {
      if (this.client.readyState === 1) {
        resolve()
      } else {
        let timesTried = 0
        let limit = 500;
        const connectionCheck = setInterval(() => {
          if (this.client.readyState === 1) {
            clearInterval(connectionCheck);
            resolve();
          } else if (timesTried > limit) {
            reject('Connectstion was taking too long. Try restarting the application.')
          } else {
            timesTried++;
          }
        }, 10);
      }
    })
  }

  getEvent(key) {
    return this.checkIfReady()
      .then(() => {
        this.client.send(JSON.stringify({ type: 'getEvent', id: key }));
        return this.handleResponse(key, 'event');
      })
      .catch(error => console.log(error));
  }

  getEvents() {
    return this.checkIfReady()
      .then(() => {
        this.client.send(JSON.stringify({ type: 'getLiveEvents' }));
        return this.handleResponse();
      })
      .catch(error => console.log(error));
  }

  getMarket(key) {
    return this.checkIfReady()
      .then(() => {
        this.client.send(JSON.stringify({ type: 'getMarket', id: key }));
        return this.handleResponse(key, 'market');
      })
      .catch(error => console.log(error));
  }

  getMarkets(keys) {
    return this.checkIfReady()
      .then(() => {
        return Promise.all(
          keys.map((market) => {
            return this.getMarket(market);
          }));
      })
      .catch(error => console.log(error));
  }

  getOutcome(key) {
    return this.checkIfReady()
      .then(() => {
        this.client.send(JSON.stringify({ type: 'getOutcome', id: key }));
        return this.handleResponse(key, 'outcome');
      })
      .catch(error => console.log(error));
  }

  getOutcomes(keys) {
    return this.checkIfReady()
      .then(() => {
        return Promise.all(
          keys.map((outcome) => {
            return this.getOutcome(outcome);
          }));
      })
      .catch(error => console.log(error));
  }
}

const wsClient = new WebSocketClass();

export default wsClient;
