const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "xSkUkIwD#xnHDi1lZl8GgFTlkOUQklL811mNy0igBAEN3UEGRAAo",
MONGOSB: process.env.MONGODB || "entr you are mongodb url hre",
SUDO_NB: process.env.SUDO_NB || "94773673969"
};
