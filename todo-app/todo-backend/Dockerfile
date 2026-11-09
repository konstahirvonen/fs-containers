FROM node:24

WORKDIR /usr/src/app

COPY . .

RUN npm ci --omit=Dev

CMD ["npm", "start"]