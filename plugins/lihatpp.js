let fetch = require('node-fetch')
let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {

  } finally {
    let { name, premium, level, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
✧───────[ *PROFILE* ]───────✧
📇 • *ɴᴀᴍᴇ:* ${username} ${registered ? '(' + name + ') ': ''}
📧 • *ᴛᴀɢ:* @${who.replace(/@.+/, '')}
📞 • *ɴᴜᴍʙᴇʀ:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
💻 • *ʟɪɴᴋ:* https://wa.me/${who.split`@`[0]}
${registered ? '🎨 • *Age:* ' + age : ''}
🌟 • *ᴘʀᴇᴍɪᴜᴍ:* ${premium ? "✅" :"❌"}
📑 • *ʀᴇɢɪsᴛᴇʀᴇᴅ:* ${registered ? '✅': '❌'}
⛔ • *ʙᴀɴɴᴇᴅ:* ❌
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, await(await require('node-fetch')(pp)).buffer(), pp.jpg, str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['lihatpp [@user]']
handler.tags = ['tools']
handler.command = /^pp$/i
module.exports = handler