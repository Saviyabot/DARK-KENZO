const fs = require('fs');
const path = require('path');
const {readEnv} = require('../databass/database')
const {cmd , commands} = require('../command')


cmd({
on: "body"
},    
async (fire, mek, m, { from, body, isOwner }) => {
const filePath = path.join(__dirname, '../Voice/autovoice.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
for (const text in data) {
if (body.toLowerCase() === text.toLowerCase()) {
const config = await readEnv();
if (config.AUTO_VOICE === 'true') {
//if (isOwner) return;        
await fire.sendPresenceUpdate('recording', from);
await fire.sendMessage(from, { audio: { url: data[text] }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
}
}
}                
});
