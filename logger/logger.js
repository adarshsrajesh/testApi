const fs = require('fs');
const path = require('path');
const apiHitCount = require('../counter/apiHitCounter');

const LOG_DIR = path.join(__dirname, 'logs');

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

function getTodayLogFile() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  return path.join(LOG_DIR, `api-hits-${year}-${month}-${day}.log`);
}

function formatTimestamp() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
  const timestamp = formatTimestamp();
  const logFile = getTodayLogFile();

  const logLine =
    `${timestamp} | API hits (last 3 hours): ${apiHitCount.get()}\n`;

  fs.appendFile(logFile, logLine, (err) => {
    if (err) {
      console.error('Failed to write API hit log', err);
    }
  });

  apiHitCount.reset();
}, 1000);