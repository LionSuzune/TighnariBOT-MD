import fs from 'fs'
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren ð
*MAAF KAK FITUR JADIBOT TIDAK ADA DI DALAM FITUR KAMI*
â©Â» *Kalau kakak mau jadi bot silahkan jasa run aja kak*
          
âââã Ä±ll *HARGA* llÄ± ãââê¥
harga nya di website ini : https://lynk.id/uzuimichelle

Contact person jasa run:
wa.me/${numberowner} (Owner)

*Thanks*`
  conn.sendButton(m.chat, anu, syt, flaaa.getRandom() + teks, [['Donasi', '.donasi'], ['SewaBot', '.sewabot']], m)
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

export default handler
