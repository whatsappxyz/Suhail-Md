const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "917067575472";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917067575472";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_15_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MixcbiAgICAgICAgMTM3LFxuICAgICAgICA4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDksXG4gICAgICAgIDgxLFxuICAgICAgICA2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU3LFxuICAgICAgICAwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg1LFxuICAgICAgICA4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDU2LFxuICAgICAgICA0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE1LFxuICAgICAgICA1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgODEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExLFxuICAgICAgICAxLFxuICAgICAgICA1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU4LFxuICAgICAgICA1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDkxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhtZHdkVi9XclRZT0FFUHArSkVJcDBlWThKcnVxMWVDeVQzcWhLeDlsWmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjl5UEM0bmI3UlNpdnJWVXhWZy1wRHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzU1YmRlNmUtNGJkYi00MjUyLTliZmItZmM2NjA1MjhkNWNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcyLFxuICAgICAgMTY4LFxuICAgICAgMSxcbiAgICAgIDE2MSxcbiAgICAgIDMxLFxuICAgICAgMTE1LFxuICAgICAgMzEsXG4gICAgICAyNDUsXG4gICAgICAyMTAsXG4gICAgICA1NSxcbiAgICAgIDQ3LFxuICAgICAgOTUsXG4gICAgICA2NyxcbiAgICAgIDE3MyxcbiAgICAgIDI0MyxcbiAgICAgIDE4LFxuICAgICAgMTQ0LFxuICAgICAgMTk5LFxuICAgICAgMTg5LFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDE1MixcbiAgICAgIDE1OSxcbiAgICAgIDIzOCxcbiAgICAgIDYzLFxuICAgICAgMTM1LFxuICAgICAgMTc0LFxuICAgICAgMTU4LFxuICAgICAgODQsXG4gICAgICAxOTEsXG4gICAgICAyMDMsXG4gICAgICA3OCxcbiAgICAgIDcsXG4gICAgICAyNCxcbiAgICAgIDE0NSxcbiAgICAgIDE2NyxcbiAgICAgIDIwOSxcbiAgICAgIDExOCxcbiAgICAgIDc3LFxuICAgICAgMTA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNTWDJHVlQxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTcwNjc1NzU0NzI6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM4ODA5Njc2ODQ5MTczOjMyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lQc29mOEVFSjc2b3JVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR283bmRRU3lWT2RrTURDUnpSbWhEdkdYT3FXTG9qQ1dkSDBRRE5GcmFnVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoQ0x5V1BGZHhGSGlvYVNnb1JCMnR5R3ZpcnhiVSs3YnRFUUNKVFcyQ054eEdUTmN2OUs5SDYvUTR0QkxOSWpQaEMvQi9VbUNLZXdpNmlGUm1pNzVEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJONVlsU2p0Y0d6aXBnRno3SG9oZFdjUkc5V21uOGlxYUVYNzgxaE91TGN0bVFTRFNrc3B2Z0ZoYWh1ZHFGd2JvTXIxU1VGcEUwU3NabUNpWS9JRUlnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTcwNjc1NzU0NzI6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzM0NDk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUG5CXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQbkIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMYUp5N2RCM2JhWm5zTG5LMTErMG5RYzhENjUrRWExT1gweXpYY0UvK29BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNDA2MzQ2MjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SHUBHAM",
  ownername:process.env.OWNER_NAME|| "Mr-Shubham",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
