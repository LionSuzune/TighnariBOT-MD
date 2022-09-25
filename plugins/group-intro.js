let handler = async (m, { conn }) => {


let krtu = `Intro Member Baru ‼️ 

🌱 Nama : 
🌱 Umur :
🌱 Kelas :
🌱 Askot/Tinggal Dimana :
🌱 Gender/Kelamin : Pilih ♂️ atau ♀️ 

📮 Terimakasih Sudah Isi Intro kami dan baca Rules grup (⁠ ⁠◜⁠‿⁠◝⁠ ⁠)⁠♡

`
conn.fakeReply(m.chat, krtu, '0@s.whatsapp.net', wm)
}
handler.command = /^(intro)$/i
handler.group = true

export default handler
