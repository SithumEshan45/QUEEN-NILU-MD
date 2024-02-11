/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = '' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://sithum_eshan_user:aNduTBXD2sMgFvRjVxnuGnpId9zi2GVc@dpg-cmu811ed3nmc739931mg-a.oregon-postgres.render.com/sithum_eshan'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94763406787'

global.OWNER_NAME = ' ⃞🌷𝗠𝗥.𝗦𝗜𝗧𝗛𝗨𝗠 𝗘𝗦𝗛𝗔𝗡💙⃝'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '⃞𝗤uee𝗻 𝗡𝗘𝗟𝗨💙⃝'

global.FOOTER = ' ⃞🌷𝗠𝗥.𝗦𝗜𝗧𝗛𝗨𝗠 𝗘𝗦𝗛𝗔𝗡💙⃝'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@ ⃞🌷𝗠𝗥.𝗦𝗜𝗧𝗛𝗨𝗠 𝗘𝗦𝗛𝗔𝗡💙⃝' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'ǫᴜᴇᴇɴ ɴɪʟᴜ  © 2024' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = '```Iam Alive Now```' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/DYPbcnFZRcD18GHaKwJ8lD' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: no" //ur yt chanel name
global.socialm = "GitHub: sithumeshan45" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
