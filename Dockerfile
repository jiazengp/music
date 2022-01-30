FROM node:16.13.1-alpine as build
ENV VITE_APP_NETEASE_API_URL=/api
WORKDIR /app
RUN apk add --no-cache python3 make g++
COPY package.json pnpm.lock ./
RUN npm install
COPY . .
RUN pnpm build

FROM nginx:1.20.2-alpine as app
RUN apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/v3.14/main libuv \
    && apk add --no-cache --update-cache --repository http://dl-cdn.alpinelinux.org/alpine/v3.14/main nodejs npm pnpm

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/netease_api /usr/src/netease_api
WORKDIR /usr/src/netease_api

RUN pnpm install

RUN echo $'server { \n\
  gzip on;\n\
  listen       80; \n\
  listen  [::]:80; \n\
  server_name  localhost; \n\
  \n\
  location / { \n\
    root /usr/share/nginx/html; \n\
    index  index.html; \n\
    try_files $uri $uri/ /index.html; \n\
  } \n\
  \n\
  location @rewrites { \n\
    rewrite ^(.*)$ /index.html last; \n\
  } \n\
  \n\
  location /api/ { \n\
    proxy_set_header  Host $host; \n\
    proxy_set_header  X-Real-IP $remote_addr; \n\
    proxy_set_header  X-Forwarded-For $remote_addr; \n\
    proxy_set_header  X-Forwarded-Host $remote_addr; \n\
    proxy_set_header  X-NginX-Proxy true; \n\
    proxy_pass        http://localhost:3000/; \n\
  } \n\
}' > /etc/nginx/conf.d/default.conf

CMD nginx ; exec node app.js
