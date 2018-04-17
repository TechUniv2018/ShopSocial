FROM node:9.10.0-alpine

LABEL maintainer="hpmahesh"

RUN mkdir -p /usr/src/app
RUN chown -R node /usr/src/app

USER node

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE		8080

VOLUME [ "/usr/src/app" ]

# CMD ["npm", "start"]
