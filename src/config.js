/** 

Yg Mau Sv Nomerku?

wa.me/62895330146373

Minimal Kasih Cr kalo mau reupload😡
Create By Dika Ardnt.
Recode By Naze & ( Nama Lu )

Kalau Sampai Ketemu Lagi Creator Bot
Yg Reupload Tanpa Kasih Cr 
Sc Akan Saya Encode

Base : Hisoka
Recode : Naze & ( LyeeHost )

**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	danzz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://danzzapi.xyz': '9267ic6a0f1',
}

// Other
global.owner = ['62895330146373','6283845185968']
global.ownernomer = "62895330146373"
global.premium = ['62895330146373']
global.packname = 'Sticker By'
global.author = 'YosokaNesia'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./media/image/yosoka.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/nazedev'
global.myyt = 'https://youtube.com/c/LyeeHostOfficial'
global.myytv = 'https://youtube.com/channel/UChNHJFSuZOQhfchT-Qh9JvA'
global.mygc = "https://chat.whatsapp.com/KETH0FmErWa0axV620PLJA"
global.botname = 'LyeeBotz'
global.akulaku = 'Bot By LyeeHost'
global.ytname = 'YT : LyeeHost Official'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
