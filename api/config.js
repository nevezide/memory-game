const path = require('path');
const dotenv = require('dotenv');

// Configuration du serveur :
// affectation des valeurs contenues dans le fichier .env
// dans process.env (ex: PORT=3000 -> process.env.port = 3000)
dotenv.config({
  path: path.resolve(__dirname, '.env'),
});

module.exports = {
  apiPort: process.env.API_PORT,
  corsOriginAllowed: [process.env.CORS_ORIGIN_ALLOW],
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
};
