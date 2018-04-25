const {start} = require('./test/dev/server');

module.exports.config = {
  framework: 'mocha',
  baseUrl: 'http://localhost:3100/',
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare() {
    browser.ignoreSynchronization = true;
    start(3100);
  }
};
