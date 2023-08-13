FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
VOLUME [ "/var/cache/nginx" ]
COPY --from=node /app/dist/client-app /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
