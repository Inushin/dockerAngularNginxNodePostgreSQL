FROM node:18.16.0-alpine3.17

# Create app directory
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

# Install app dependencies
COPY --chown=node:node package*.json ./
# COPY --chown=node:node . .
USER node

RUN npm install

# If you are building your code for production
RUN npm ci

# Bundle app source
COPY --chown=node:node . .

#EXPOSE 3000

CMD [ "npm", "start" ]
