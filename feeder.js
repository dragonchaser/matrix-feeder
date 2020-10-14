const jsonfile = require('jsonfile')
const sdk = require("matrix-bot-sdk");

const configfile = 'config/config.json'
var config = jsonfile.readFileSync(configfile)

const MatrixClient = sdk.MatrixClient;
const SimpleFsStorageProvider = sdk.SimpleFsStorageProvider;
const AutojoinRoomsMixin = sdk.AutojoinRoomsMixin;

const client = new MatrixClient(config.homeServerUrl, config.accessToken, new SimpleFsStorageProvider(config.storage));

AutojoinRoomsMixin.setupOnClient(client);
client.start().then(() => console.log("LOG: Client started!"));

client.on("room.message", (roomId, event) => {
  if (! config.monitorChannels.includes(roomId)) return
  if (! event["content"]) return;
  const sender = event["sender"];
  const body = event["content"]["body"];
  const type = event["content"]["msgtype"];
  const info = event["content"]["info"]
  const url = event["content"]["url"]

  // TODO: add support for other things here, have an array of relayed messages in the config and check with includes
  if(roomId != config.targetRoomId && type == 'm.image') {
    client.sendMessage(config.targetRoomId, {
      "sender" : sender,
      "msgtype": "m.image",
      "body": body,
      "info": info,
      "url": url
  });
  }
});
