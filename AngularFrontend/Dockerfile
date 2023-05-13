# Stage 1: Build frontend
FROM node:18.16.0-alpine3.17 as build-stage
WORKDIR ./app
COPY ./package*.json /app/
RUN npm ci
COPY ./ /app/

RUN npm run build -- --output-path=./dist/out --output-hashing=all

# Stage 2: Serve it using Ngnix
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
    