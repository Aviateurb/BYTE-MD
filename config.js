
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
global.owner = process.env.OWNER_NUMBER || "923072380380";
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09yN2lyMWJ3THEzZ0JWMXRiNzNHSXp1QU9yZmVtOHZHMEFpRmVwN3VtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGdHSkVDS2RYODRaQWhHbGw0ai9mbkszMXFxMWhJMUlOVnd0ajB5TWVtMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQzVlTCtZZDk5V2o3TTk0YmNPS1VwQkNJSGkxY05lT3J2NFM2ZkZZbTJzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEOVVZT2NMSmdRa3R1aGhmR1FrdERGWFhGZnduMzA0K2ZTVmVWSWZpNkFRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktBQVdNeSsraFpWd1pJNzczVXV5TXRMZnYySngwY2Fjc0Y2UjlvQjRRbHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1tMlZneDZXMGtUY2ZsYWtWZGtIWkNwSWFhVGpVcDBCZmdlaXl4NDlFMGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUNjSUZoSHFxOGxyWitIbmU4UVhiRWdORkk3ZXBJa1RpTUpCV3F0TEJXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaytMSjdIZCtMdFp5N3RTQXVaMG5NT0wvRWxMNXN0YmhGVVRoUGhPZXAzMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdxUVJ0WU96OUdhV2FBTWhDZnJINnY3TlFoSk4zMTZoZEw0N0tQUEdqN1h3c05YejFERnV6MEg0cm51NUYwOGNuMWFkci8xaGJxOTBubHh2aU5ydkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJudEFtcnFCcjA3WFE5ZnQ0a2Y1TzJqdGhUVjNjc1gyajN1MDl5dHNsN0FFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0MjA2NTA2OTk0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRjREQjI1MTg4N0ZBQ0JBMDg2MEMwQTk0NkIyQjJENCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMDQ2MTc5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDIwNjUwNjk5NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUU2QjZCODY4MzgwQTJBQjVFMzJDOTg3ODQ1QkUzQTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjA0NjE4MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSnp4RUJUamZRUVdIeVFLc2pNYndudyIsInBob25lSWQiOiJjZWJjZGEzMC1jODUxLTQ0N2EtYWQ3YS1kOGQyNDE5YWRlNzQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWZWeThZNjNobHp2aVdQZjNCMGVOSU5DTEpZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFkWDBCU2hVZGZlaUtxay9qYmFyY3lGWWY1ND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQVkZYVFg5UyIsIm1lIjp7ImlkIjoiMjQyMDY1MDY5OTQzOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2ZiPCdmarwnZmn8J2ZoPCdma7wlqSN77iO4oOi4oOfIPCdmY7wnZmd8J2ZnvCdmZzwnZmW8J2Zp/CdmZbwnZmg8J2ZniJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzNuZ24wUTA2MlJ0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRXkrODdTRkFsNUIvdWp1ZVh2TE0zdThNbmRPYnJlSUpoMWhJMlZ6ZVZIVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTTBoZmZONWNmR1RTc21Gd2o1WkNXODFmOVV0UTFtdkUwcUhhTVBoM0lodGpxOEhpVUYyVEpkTmdkRitNcHpwWHFvekpYMHF1d0EwR0x4N01oUVY2QkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjNFbEplQ2ZNUEFpd3FrR1V3ZUV3cFFNMndpajlpQi9wQnpveEJ3Wlg5cXNqQjdsbzVKS1ZBbXR1MUpjSDg0UnE4NWkrVWR2RkkzeG9EUGlCc29zdkRRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQyMDY1MDY5OTQzOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUk12dk8waFFKZVFmN283bmw3eXpON3ZESjNUbTYzaUNZZFlTTmxjM2xSMSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjA0NjE3NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIUWwifQ==" //Make sure session id starts with Byte;;;



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
