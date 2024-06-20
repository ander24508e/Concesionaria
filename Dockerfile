FROM node:18

RUN mkdir /app

WORKDIR /app 

COPY . .

RUN npm install 

EXPOSE 9090

CMD ["node", "app.js"]
