const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
     react: "📜",
    desc: "get cmd list.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
anime: '',
fun: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}


let madeMenu = ` 
👋 *𝐇𝐞𝐥𝐥𝐨 ${pushname}* 

🔮𝐃𝐀𝐑𝐊 𝐊𝐄𝐍𝐙𝐎 𝐌𝐃 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔🔮

╭━━━━━━━━━━━━━━━━━━━ 
│*👤Bot Owener: 𝐌𝐑 𝐒𝐞𝐧𝐞𝐬𝐡*
│*🤖Bot Name: 𝐃𝐀𝐑𝐊 𝐌𝐄𝐍𝐙𝐎 𝐌𝐃*
│*🧬Prefix: [.]*
│*🔖Versions: 1.0.0*
│*🔮Whatsap Number: +94773673969*
╰━━━━━━━━━━━━━━━━━━━ 

> 🔮𝐌𝐀𝐃𝐄 𝐁𝐘 𝐌𝐑 𝐒𝐄𝐍𝐄𝐒𝐇🔮

╭━━❮ 🔧 MAIN COMMAND ❯━━━━━━━╮
────────────────────
${menu.main}
╰━━━━━━━━━━━━━━━━━━━

> 🔮𝐌𝐀𝐃𝐄 𝐁𝐘 𝐌𝐑 𝐒𝐄𝐍𝐄𝐒𝐇🔮

╭━━❮ 📥 DOWNLOAD COMMAND ❯━━━━╮
────────────────────
${menu.download}
╰━━━━━━━━━━━━━━━━━━━

> 🔮𝐌𝐀𝐃𝐄 𝐁𝐘 𝐌𝐑 𝐒𝐄𝐍𝐄𝐒𝐇🔮

╭━━❮ 👥 GROUP COMMAND ❯━━━━━━╮
────────────────────
${menu.group}
╰━━━━━━━━━━━━━━━━━━━

> 🔮𝐌𝐀𝐃𝐄 𝐁𝐘 𝐌𝐑 𝐒𝐄𝐍𝐄𝐒𝐇🔮

╭━━❮ 🔒 OWNER COMMAND ❯━━━━━━╮
────────────────────
${menu.owner}
╰━━━━━━━━━━━━━━━━━━━

> 🔮𝐌𝐀𝐃𝐄 𝐁𝐘 𝐌𝐑 𝐒𝐄𝐍𝐄𝐒𝐇🔮

╭━━❮ 🔄 CONVERT COMMAND ❯━━━━╮
────────────────────
${menu.convert}
╰━━━━━━━━━━━━━━━━━━━

> 🔮𝐌𝐀𝐃𝐄 𝐁𝐘 𝐌𝐑 𝐒𝐄𝐍𝐄𝐒𝐇🔮

╭━━❮ 🔎 SEARCH COMMAND ❯━━━━━╮
────────────────────
${menu.search}
╰━━━━━━━━━━━━━━━━━━━

> 🔮𝐌𝐀𝐃𝐄 𝐁𝐘 𝐌𝐑 𝐒𝐄𝐍𝐄𝐒𝐇🔮

╭━━❮ 🎭 ANIME COMMAND ❯━━━━━━╮
────────────────────
${menu.anime}
╰━━━━━━━━━━━━━━━━━━━

> 🔮𝐌𝐀𝐃𝐄 𝐁𝐘 𝐌𝐑 𝐒𝐄𝐍𝐄𝐒𝐇🔮

╭━━❮ 😅 FUN COMMAND ❯━━━━━━━━╮
────────────────────
${menu.fun}
╰━━━━━━━━━━━━━━━━━━━

> 🔮𝐌𝐀𝐃𝐄 𝐁𝐘 𝐌𝐑 𝐒𝐄𝐍𝐄𝐒𝐇🔮
   `
await conn.sendMessage(from, { audio: fs.readFileSync('./Voice/menu.mp3') , ptt: true  , mimetype: 'audio/mpeg'}, { quoted: mek })
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

