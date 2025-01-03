
const fs = require('fs');
const path = require('path');
const os = require('os');
require('dotenv').config(); // Cargar las variables del archivo .env

const APP_CONFIG_DIR = process.env.APP_CONFIG_DIR
  ? path.join(os.homedir(), process.env.APP_CONFIG_DIR)
  : path.join(os.homedir(), '.config/fetch-today-calendar');

  const APP_DATA_DIR = process.env.APP_DATA_DIR
  ? path.join(os.homedir(), process.env.APP_DATA_DIR)
  : path.join(os.homedir(), '.local/share/fetch-today-calendar');


  [APP_CONFIG_DIR, APP_DATA_DIR].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
