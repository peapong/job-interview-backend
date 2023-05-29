FROM node:16-buster

WORKDIR /app

RUN mkdir -p app
RUN cd /app
COPY package.json .env /app/

RUN yarn install --unsafe-perm=true --force
# RUN yarn build

COPY . app

EXPOSE 8080

ENV ADDRESS=0.0.0.0
ENV PORT=8080

CMD [ "yarn", "start" ]