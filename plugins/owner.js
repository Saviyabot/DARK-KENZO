const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👤",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*💫  𝙳𝚊𝚛𝚔 𝙺𝚎𝚗𝚣𝚘 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝚘𝚝*

*| ᴏᴡɴᴇʀ ɴᴀᴍᴇ*: 𝚂𝚎𝚗𝚎𝚜𝚑 𝙰𝚖𝚊𝚗𝚝𝚑𝚊(𝙺𝚎𝚟𝚒𝚗)
*| ɴᴜᴍʙᴇʀ*: 94773673969
*| ʏᴏᴜᴛᴜʙᴇ*: https://www.youtube.com/@SAVIYA123
*| ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ*: https://whatsapp.com/channel/0029VakzRXO6rsQw95N67f0v

𝙳𝙰𝚁𝙺 𝙺𝙴𝙽𝚉𝙾 𝙼𝙳
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
