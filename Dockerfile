FROM node:16.13.0

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Installing dependencies
COPY package*.json .
COPY yarn.lock .
RUN yarn install

# Copying source files
COPY . .

# Expose ports for dev
EXPOSE 3000
EXPOSE 3001

CMD []