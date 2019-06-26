FROM node:lts-alpine

RUN apk add yarn --update

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY ./index.js ./

CMD ["yarn", "start"]
