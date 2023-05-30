FROM node:16-buster

WORKDIR /app

RUN mkdir -p core_app
RUN cd core_app

COPY . core_app

RUN cd core_app && yarn install --unsafe-perm=true --force
RUN cd core_app && yarn build

WORKDIR /app/core_app

EXPOSE 4000

CMD [ "yarn", "start" ]