const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "xSkUkIwD#xnHDi1lZl8GgFTlkOUQklL811mNy0igBAEN3UEGRAAo",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/GWMn14L/connet.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello ${pushname} n\nI am Dark-Kenzo-Md i am alive now..!",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
SUDO_NB: process.env.SUDO_NB || "94773673969",
OWNER_NAME: process.env.OWNER_NAME || "SENESH",
BOT_NAME: process.env.BOT_NAME || "DARK-KENZO-MD",
AUTO_VOICE: process.env.AUTO_VOICE || "true"


};
