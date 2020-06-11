FROM node:13.12.0-alpine as build

WORKDIR /app

COPY . ./

RUN yarn

RUN yarn build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html
