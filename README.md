# matrix-announcement-bot

Matrix Announcement Bot is a matrix bot that monitors defined channels for messages and posts them to other channels.
Mostly the code is a fork of https://github.com/dragonchaser/matrix-feeder/.

## Why

In our case we needed a Bot, which can send messages to a bulk of rooms. Now our moderation team can send a message in a dedicated room and the bots will send it to the 
predefinied rooms without revealing the moderation team members account.

## License

MIT see [LICENSE](https://github.com/devdevjeff/matrix-announcement-bot/blob/master/LICENSE) file in this repository.

## Install & Run

- dependencies

  ```bash
  $> git clone https://github.com/devdevjeff/matrix-announcement-bot
  $> cd matrix-announcement-bot
  $> npm install
- copy `config/config-example.json` to `config/config.json` & edit

  **WARNING:** `targetRoomId` must not be present in the list of monitored Rooms, otherwise this will result in loops & lots of spam.

- run

  ```bash
  $> node announcer.js
  ```

- invite the bot to the channels of your choice

  **NOTE:** The bot will only relay messages if the room is listet in the `monitorChannels` field in the config!

### Docker

Also avaiable at Dockerhub -> https://hub.docker.com/r/devdevjeff/matrix-announcement-bot

#### run

- x86_64
  ```bash
  $> docker run \
     -v/path/to/you/config.json:/matrix-announcement-bot/config/config.json \
     devdevjeff/matrix-announcement-bot:latest
  ```


#### build

  ```bash
  $> git clone https://github.com/devdevjeff/matrix-announcement-bot
  $> cd matrix-announcement-bot
  $> docker build -f docker/Dockerfile -t <imagename>:<tag> .
  ```
