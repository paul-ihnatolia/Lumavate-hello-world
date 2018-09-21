FROM node:8-slim

WORKDIR /opt/app/

COPY package.json yarn.lock ./

RUN apt-get update && apt-get install -y git

RUN yarn install

COPY . .

CMD yarn run dev
