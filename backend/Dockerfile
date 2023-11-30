FROM node:18

WORKDIR /usr/src/app

COPY . .
RUN npm ci
RUN npm install -g nodemon

EXPOSE 3001
CMD ["npm", "start"]
