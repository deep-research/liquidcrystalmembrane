FROM node:14-alpine

# Install build tools required for node-gyp on Node 14
RUN apk add --no-cache python3 make g++ build-base vips-dev && \
    ln -sf python3 /usr/bin/python

ENV PYTHON=/usr/bin/python3

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 8080
CMD ["yarn", "develop"]