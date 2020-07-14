FROM node:14.5-slim
COPY . ./app
WORKDIR /app
RUN yarn install
EXPOSE 80
CMD yarn start
