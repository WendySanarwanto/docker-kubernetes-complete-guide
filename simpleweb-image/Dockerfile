# Specify Base Image
FROM node:10.16.0-alpine

# Install some dependencies
RUN apk add yarn --update

# Specify working directory
WORKDIR /usr/app

# Copy package.json & yarn.lock files
COPY ./package.json ./
COPY ./yarn.lock ./

# Install web app's dependencies
RUN yarn

# Copy web app's files into working directory
COPY ./index.js ./

# Run the web app
CMD ["yarn", "start"]
