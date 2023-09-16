#FROM node:current-alpine
FROM node:14-alpine
#RUN apk add --no-cache nodejs npm


WORKDIR /halen-luzon-theme-app

COPY package*.json /halen-luzon-theme-app/

COPY . /halen-luzon-theme-app

#RUN npm cache clean --force
#RUN npm i npm@latest -g
#RUN npm install -g npm@8.3.1
#RUN npm install --save --legacy-peer-deps
RUN npm install

#RUN npm i
RUN npm run build

EXPOSE 3000

#ENTRYPOINT ["node"]

CMD ["npm","next.config.js"]
