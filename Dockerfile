FROM node:16.15.0-alpine

# source directory
WORKDIR /app

# dependency file (package.json and/or yarn.lock)
COPY package.json .

# dependency install file
RUN yarn install

# copy the sources
COPY . .

# listener
EXPOSE 3000

# command to run
CMD [ "yarn", "start:dev" ]
