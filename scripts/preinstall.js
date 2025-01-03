
const fs = require('fs');
const path = require('path');
const os = require('os');
require('dotenv').config();

const APP_CONFIG_DIR = process.env.APP_CONFIG_DIR
  ? path.join(os.homedir(), process.env.APP_CONFIG_DIR)
  : path.join(os.homedir(), '.config/fetch-todays-calendar');

  const APP_DATA_DIR = process.env.APP_DATA_DIR
  ? path.join(os.homedir(), process.env.APP_DATA_DIR)
  : path.join(os.homedir(), '.local/share/fetch-todays-calendar');


  [APP_CONFIG_DIR, APP_DATA_DIR].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
