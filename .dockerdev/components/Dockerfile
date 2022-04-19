FROM node:16.13.0

# Create app directory
RUN mkdir -p /home/app/components/ && chown -R node:node /home/app/components
WORKDIR /home/app/components

# Copying source files
COPY --chown=node:node . .

# Assign ownership to node user
USER node

# Installing dependencies
COPY package*.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

# Expose Ports
EXPOSE 8000

CMD []