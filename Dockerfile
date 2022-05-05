FROM node:16.13.0

# Create app directory
RUN mkdir -p /app/ && chown -R node:node /app
WORKDIR /app

# Assign ownership to node user
USER node

# Copying source files
COPY --chown=node:node . .

# Installing dependencies
COPY package*.json .
COPY yarn.lock .
RUN yarn install

EXPOSE 443 3001 3000 27017 27018 27019

CMD []