FROM node:14

EXPOSE 8080

# copy in our source code last, as it changes the most
WORKDIR /app

# Use latest version of npm
RUN npm install npm@latest -g

RUN npm install -g yarn

COPY package.json package-lock.json* ./

RUN yarn install && yarn cache clean --force

COPY . .

CMD [ "yarn", "start"]