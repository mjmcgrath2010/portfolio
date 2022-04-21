FROM node:16.13.0

# Create app directory
RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app

# Copying source files
COPY --chown=node:node . .

# Assign ownership to node user
USER node

# Installing dependencies
COPY package*.json .
COPY yarn.lock .
RUN yarn install

CMD []