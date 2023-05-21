
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
  // https://api.botcahx.live
//https://api.lannn.me
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.btc
// - Contoh global.btc = 'xzRhejka'
// global.lann = 'trial'
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.

global.owner = ['6282229217681']  
global.mods = ['6282229217681'] 
global.prems = ['6282229217681']
global.nameowner = 'Tio'
global.numberowner = '6282229217681' 
global.mail = '-' 
global.dana = '6282229217681'
global.pulsa = '6282229217681'
global.gopay = '-'
global.namebot = 'ᴇʟᴀɪɴᴀ ʀᴏʙᴏᴛ'
global.gc = 'https://chat.whatsapp.com/Ln2vHjRrRayAbzalRMB56r'
global.web = 'ɢᴀᴋ ᴀᴅᴀ'
global.instagram = 'ɢᴀᴋ ᴀᴅᴀ'
global.wm = '© ɪɴᴏʀʏ ᴀɴᴅ ᴡᴀʜᴀʙ'
global.watermark = wm
global.wm2 = '⫹⫺ ɪɴᴏʀʏ ᴀɴᴅ ᴡᴀʜᴀʙ'
global.wm3 = '© ɪɴᴏʀʏ ᴀɴᴅ ᴡᴀʜᴀʙ'
global.wm4 = '© ᴇʟᴀɪɴᴀ ʀᴏʙᴏᴛ'
global.wait = '_*ᴛᴜɴɢɢᴜ sᴇᴅᴀɴɢ ᴅɪ ᴘʀᴏsᴇs...*_'
global.eror = '_*sᴇʀᴠᴇʀ ᴇʀᴏʀ*_'
global.benar = 'ʙᴇɴᴀʀ ✅\n'
global.salah = 'sᴀʟᴀʜ ❌\n'
global.stiker_wait = '*⫹⫺ sᴛɪᴋᴇʀ sᴇᴅᴀɴɢ ᴅɪʙᴜᴀᴛ...*'
global.packname = 'ᴍᴏᴅᴇ ᴡɪᴛʜ'
global.author = 'ᴇʟᴀɪɴᴀ ʀᴏʙᴏᴛ
global.alpiskey = '8ecfc216' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'YOURKEY' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'trial' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.lannn.me
global.APIs = { 
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'YOURKEY' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
