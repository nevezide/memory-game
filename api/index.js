const config = require('./config');
const Api = require('./api');

const api = new Api(config);
api.init();
