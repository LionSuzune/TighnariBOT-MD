let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} RULES ${htka}

 > *BANNED + BLOK PERMANEN* :
┃• Merusak Nama Baik Bot
┃• Meniru/Menyalin Teks² Pesan Pada Bot Tanpa Izin
┃• No Ambil Waifu Lappland Dia dari dulu suka dia sambil simpan foto lappland 300+. Kalo ada ambil Ban Permanen 
┃• Spam Menu Ga Jelas
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Grup BOT', url: 'https://chat.whatsapp.com/JkMDB7UqVsaIsKX91QtP9D'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.tags = ['info']
handler.command = /^banpermanen$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP