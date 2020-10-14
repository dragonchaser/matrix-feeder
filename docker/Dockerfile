FROM node:latest
LABEL maintainer="dragonchaser <matrix-feeder@datenschmutz.space>"
RUN git clone https://github.com/dragonchaser/matrix-feeder /matrix-feeder
WORKDIR /matrix-feeder
RUN npm install
CMD node feeder.js

