const cheerio = require('cheerio')
const request = require('request')
const jsonfile = require('jsonfile')
const sdk = require("matrix-bot-sdk");

const configfile = 'config/config.json'
var config = jsonfile.readFileSync(configfile)

const MatrixClient = sdk.MatrixClient;
const SimpleFsStorageProvider = sdk.SimpleFsStorageProvider;
const AutojoinRoomsMixin = sdk.AutojoinRoomsMixin;
const delay = ms => new Promise(res => setTimeout(res, ms));
const client = new MatrixClient(config.homeServerUrl, config.accessToken, new SimpleFsStorageProvider(config.storage));

AutojoinRoomsMixin.setupOnClient(client);
client.on("room.message", handleCommand);
client.start().then(() => console.log("LOG: Client started. V0.25!"));

async function handleCommand(roomId, event) {
  if (! config.monitorChannels.includes(roomId)) return
  if (event["sender"] === await client.getUserId()) return;
  if (! event["content"]) return;
  const sender = event["sender"];
  const body = event["content"]["body"];
  const type = event["content"]["msgtype"];
  const info = event["content"]["info"]
  const url = event["content"]["url"]
  
  for (i in config.targetRoomId) {
    if(roomId != config.targetRoomId[i]) {
      if(config.relayTypes.includes(type)) {
        client.sendMessage(config.targetRoomId[i], {
        "msgtype": type,
        "body": body,
        "info": info,
        "url": url
        });
      }
    }
  }
  client.unstableApis.addReactionToEvent(roomId, event['event_id'], '✅');
  const replyBody = "Announcement send. Messagesource will be deleted in 10 seconds to prevent multiple posting"
  const reply = RichReply.createFor(roomId, event, replyBody, replyBody);
  reply["msgtype"] = "m.notice";
  client.sendMessage(roomId, reply);
  await delay(10000);
  client.redactEvent(roomId, event['event_id'], 'Preventing Multiple Posting');
});
