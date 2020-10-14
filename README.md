# matrix-feeder

Matrix feeder is a matrix bot that monitors defined channels for images and posts them to another channel.

## Why

I have lots of channels where hobbiests post railway related photos, usually there is lots of noise in between the images so I decided to channel them into one to be able to see the images alone.

## License

MIT see [LICENSE](https://github.com/dragonchaser/matrix-feeder/blob/master/LICENSE) file in this repository.

## Install & Run

- dependencies
  ```
  $> git clone https://github.com/dragonchaser/matrix-feeder
  $> cd matrix-feeder
  $> npm install
- copy config-example.json to config.json & edit
- run
  ```
  $> node feeder.js
  ```

### Docker

#### run
  ```
  $> docker run -v/path/to/you/config.json:/matrix-feeder/config.json dragonchaser/matrix-feeder:latest
  ```

#### build
  ```
  $> git clone https://github.com/dragonchaser/matrix-feeder
  $> cd matrix-feeder/docker
  $> docker build . -t <imagename>:<tag>
  ```
