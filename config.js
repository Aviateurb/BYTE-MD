
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "242065069943";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0RCL2RrSXpPZFhQTkVCU0M5TyszQWx5WG5zOE1saUZWMHBpNGZWVkluST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMU9zcDFUc3hsS2FtcXc0ZXFUZzI3T01wY1h4QTkyVHd0eXBIckZ0N1FEbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyR0dMZTY5TWVvdlFtM1dvRGs0YVk5SXhvUmNwc1pOaHJIUCtKNjduVEc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpUzNMT0JFTHRBeWxOc21aRkxiTVpKN0lZUUZHaUtZc25tcTJZZTRlSkhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFHLzFKZVdvcDRsZUc1S0NCbStad3h0N2lrUjRlUVN4WUJBZ1hmT0FISDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJMRTYySTVaeGtsTmpEeTBUMjd0NER3SDlUemh5N3d3aHIzc0tTRXhMakU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tJLzhkOW5sTjZHU1lMd05lK1BoVW9hMVdsUUZIazdRUVQ4TDREeUpFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmxscms1Y1RhMi96dEtxMHhxZmpBT0NDLzhWOU9zcEFrNmJjRGNEZk94cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink4WjFYQllRMDQwRTRwMFh0bU9UMGw4bWJ2YlVTWjFyMEtVc0dQRFJLelp3RkE3bXQyWjFEVFhZSUhNTWNXSHZ5TzZ1WUhaSjFIU1VwU1M1Vm5qQkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJZZlhQV0dYVWExR3lhWlNKdko3Vnh2OTJRQVpybEczRWVSeVUrYVhiOW1ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0MjA2NTA2OTk0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCQ0EwRDdDNERFQ0UyNDU3NzFFN0U0QkMxNjdBOUY3NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMDQyNzE1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDIwNjUwNjk5NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzk1NEVGNUREQ0Y4OTc4Mzg2NjQ5MEY0M0I3REM5OEIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjA0MjcxNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTGtFVUJCV0VSRFNJV215VWQ2UGFSQSIsInBob25lSWQiOiIwZTE1MjNiNi04NWViLTRmYWEtOGVjNy0wOTZkYTA2MjAxZDQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXdNVWs4MjE5d2dWRlNVVlZoZUJYY1NBYVBrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFCOWlHL3FUblUwTDYrQjJ1K1dPUXFieGdxaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJBRUQ0QlgzWCIsIm1lIjp7ImlkIjoiMjQyMDY1MDY5OTQzOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2ZiPCdmarwnZmn8J2ZoPCdma7wlqSN77iO4oOi4oOfIPCdmY7wnZmd8J2ZnvCdmZzwnZmW8J2Zp/CdmZbwnZmg8J2ZniJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3JuZ24wUXpKS1J0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRXkrODdTRkFsNUIvdWp1ZVh2TE0zdThNbmRPYnJlSUpoMWhJMlZ6ZVZIVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRXRHNFVoa0ZPRzVWVENCdHFoZHl4cDRHNGtySE1nR1Vmb0t6clFLMXhERXNSN010ZE9vOWdnaGJodDVnUXpZdDBTZ0pQbER2V1NTdlhmUDhGdUp0QXc9PSIsImRldmljZVNpZ25hdHVyZSI6Inl4NFVaVXhRcDVveW9GTjRLUHVyREw0aUpuVEtHaitvOTlGbHdYdWxFOWZXVTMzNmkyK1BGYUpDSHM1cWVLdjRlSDcvalJkQllNUVJyQkdscWlyWUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQyMDY1MDY5OTQzOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUk12dk8waFFKZVFmN283bmw3eXpON3ZESjNUbTYzaUNZZFlTTmxjM2xSMSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjA0MjcxMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFERnUifQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
