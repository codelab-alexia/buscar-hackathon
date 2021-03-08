FROM node:14.15.4-alpine3.12

RUN apk add --update build-base make bash python3

WORKDIR /usr/src/app

USER node

EXPOSE 3000
