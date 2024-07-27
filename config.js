
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0QyNmhVK3Q4Mys2QTRkNjJ2MjBqQTVXeVA2anNrRkQ1SnNZRm41VGYyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0pQeGlZNERKKzViN0ZoSXl5U0tkMmVyQnJpZ3FzWitBOW54aTFLQnhDTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRE1GRHZkU3NWNUh6MGVhUWQwRVA3ZFF5bm1SVzBqaGp4aTZJNC9VSjFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyOTdCaGhVSDhiQ2FGMEFYSmc2QzhKUDJCRHl4TTU3RGFZck5PNTk5ZjE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1DUUNRWHN3Qnl4cTNxNmp4eUc5bWdQd29tWTlqQVhGN0xBR25HaGlTR2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxJUEpMU0VCS21tTVgwUFUwOUhicjlNejBzMUlsT3lXSnRVRW1ONzdOd0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUI2YjdDR2FCK0M0dkdqcm56UzhrSDVvTGV1TjFuZEMzRHBEdHBrdjhHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWFpWlVwdWtMdXdCZFBicEg2eUNoZlhWVlI2Um0xRHl5Vkdkc1o4MHlGST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRRVk1ZZWdJRCt6RThuZUNLRkJXTytKM0JCRzBGajl4Q1ZWWnlGRW85TzBra0o4YzU0bi8zQWNiUTZ2bEtwakV1dmpKem5VSUNJemxjZDRXVm9jRGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6Ik93bEdvZ1V5SWhGcWs0VENHM0NyenFZazg5Y0xhM0cwZWNRT0orUzAxTWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjQyMDY1MDY5OTQzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjAxMDg5RjQzMDg3RDA2NjQwMTBDRDdEODdBODc1ODFFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIwNDE5NDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI0MjA2NTA2OTk0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDN0Y1RkFCOEFGNkY0OTZBNjIzNzZBN0IzRUFENTg1MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMDQxOTQ2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkQjF0eUVDV1JtV0g4Vjc3YmtWRDhnIiwicGhvbmVJZCI6ImNlOWFkMWQ0LTUwMjgtNDRmNy1hY2RmLTQ5NjU0NjNkOTE4NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4anJrWHlYbVZrY3drVmhGVnczZFZQNkpmSEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTNNdGdhN0RQSWV3L3V4ekNlNVNmcmFobUlzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ1VDQ2TlQyIiwibWUiOnsiaWQiOiIyNDIwNjUwNjk5NDM6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZmI8J2ZqvCdmafwnZmg8J2ZrvCWpI3vuI7ig6Lig58g8J2ZjvCdmZ3wnZme8J2ZnPCdmZbwnZmn8J2ZlvCdmaDwnZmeIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLbm5nbjBReW95UnRRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFeSs4N1NGQWw1Qi91anVlWHZMTTN1OE1uZE9icmVJSmgxaEkyVnplVkhVPSIsImFjY291bnRTaWduYXR1cmUiOiI5M0Y5Q1ljQ0xUWE94bEU3THJyL3dveS92M2lyTnFQQ3ZPNlowMmIyQTRkMVBsZnZXZnFBMFpQV3RaZnlNczR1UkF5a3JsNHo3TnduMFpTWG9MM1REZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVWVZMlc1ZGEyeEV0SUVlb0RxSEZyY1Z0Y0NWYlFBanJtMEFwblhnNmx2RzQ0QWUvMnJmME5GOVJmWnBHazE3NDc1UTBUWml1L2tRZzRUc1dCYXVBaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDIwNjUwNjk5NDM6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSTXZ2TzBoUUplUWY3bzdubDd5ek43dkRKM1RtNjNpQ1lkWVNObGMzbFIxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMDQxOTQzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURGcyJ9" //Make sure session id starts with Byte;;;



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
