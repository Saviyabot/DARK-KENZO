const fs = require('fs');
const path = require('path');
const {cmd , commands} = require('../command')


cmd({
on: "body"
},    
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

    
const filePath = path.join(__dirname, '../Voice/autovoice.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
for (const text in data) {
if (body.toLowerCase() === text.toLowerCase()) {
const config = await readEnv();
if (config.AUTO_VOICE === 'true') {
//if (isOwner) return;        
await conn.sendPresenceUpdate('recording', from);
await conn.sendMessage(from, { audio: { url: data[text] }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
}
}
}                
});
