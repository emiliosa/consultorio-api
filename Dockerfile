FROM node:lts-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install -quiet

COPY . .

EXPOSE 8080
CMD ["npm", "start"]