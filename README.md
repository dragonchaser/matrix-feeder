# matrix-feeder

Matrix feeder is a matrix bot that monitors defined channels for media and posts them to another channel.

## Why

I have lots of rooms where hobbiests post railway related photos and videos, usually there is lots of noise between them so I decided to channel these into one room to be able to see them as a feed.

## License

MIT see [LICENSE](https://github.com/dragonchaser/matrix-feeder/blob/master/LICENSE) file in this repository.

## Install & Run

- dependencies

  ```bash
  $> git clone https://github.com/dragonchaser/matrix-feeder
  $> cd matrix-feeder
  $> npm install
- copy `config/config-example.json` to `config/config.json` & edit

  **WARNING:** `targetRoomId` must not be present in the list of monitored Rooms, otherwise this will result in loops & lots of spam.

- run

  ```bash
  $> node feeder.js
  ```

- invite the bot to the channels of your choice

  **NOTE:** The bot will only relay media if the room is listet in the `monitorChannels` field in the config!

### Docker

#### run

  ```bash
  $> docker run -v/path/to/you/config.json:/matrix-feeder/config/config.json dragonchaser/matrix-feeder:latest
  ```

#### build

  ```bash
  $> git clone https://github.com/dragonchaser/matrix-feeder
  $> cd matrix-feeder/docker
  $> docker build . -t <imagename>:<tag>
  ```
