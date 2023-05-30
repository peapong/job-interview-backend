FROM node:16-buster

WORKDIR /app

RUN mkdir -p core_app
RUN cd core_app

# COPY package*.json ./

# RUN cd core_app

COPY . core_app

RUN cd core_app && yarn install --unsafe-perm=true --force
RUN cd core_app && yarn build
# RUN yarn build

# COPY . app
WORKDIR /app/core_app

EXPOSE 4000

# ENV ADDRESS=0.0.0.0
# ENV PORT=8080

CMD [ "yarn", "start" ]