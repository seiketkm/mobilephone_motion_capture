FROM node:14.5-slim
COPY . ./app
WORKDIR /app
RUN yarn install
EXPOSE 3000
EXPOSE 10001 10002 10003
CMD yarn start
