const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "abARBSwZ#gGlv8_j3ndR-WCnhtHM_3m-3TDa8CqDAf_AdSYJod50",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/GWMn14L/connet.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello ${pushname} I AM DARK KENZO ALIVE NOW*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
SUDO_NB: process.env.SUDO_NB || "94773673969",
OWNER_NAME: process.env.OWNER_NAME || "SENESH",
BOT_NAME: process.env.BOT_NAME || "DARK-KENZO-MD",
AUTO_VOICE: process.env.AUTO_VOICE || "true"


};
