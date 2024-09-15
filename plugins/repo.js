const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*💫 𝙳𝙰𝚁𝙺 𝙺𝙴𝙽𝚉𝙾 𝚁𝙴𝙿𝙰𝚂𝙸𝚃𝙾𝚁𝚈 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽*

*| ɴᴀᴍᴇ*: 𝙳𝙰𝚁𝙺 𝙺𝙴𝙽𝚉𝙾 𝙼𝙳
*| ᴏᴡɴᴇʀ*: 𝚂𝚎𝚗𝚎𝚜𝚑 𝙰𝚖𝚊𝚗𝚝𝚑𝚊(𝙺𝚎𝚟𝚒𝚗)
*| ɴᴜᴍʙᴇʀ*: 94773673969
*| ᴠᴇʀꜱɪᴏɴ*: 1.0.0


*📡 REPO LINK*
🔗◦https://github.com/KEVIN-LEVIN-TECH/DARK-KENZO

*📌 SUBSCRIBE MY YOUTUBE CHANNEL*
🔗◦ https://www.youtube.com/@SAVIYA123

𝙼𝙰𝙳𝙴 𝙱𝚈 𝙳𝙰𝚁𝙺 𝙺𝙴𝙽𝚉𝙾 𝙼𝙳
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
