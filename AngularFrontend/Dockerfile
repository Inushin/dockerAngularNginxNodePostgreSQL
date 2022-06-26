# Stage 1: Build frontend
FROM node:fermium as build-stage
WORKDIR ./app
COPY ./package*.json /app/
RUN npm ci
COPY ./ /app/
# Create Angular environment files in build time based in BRANCH and BUILD args
ARG BRANCH
RUN node set-env.js $BRANCH
RUN npm run build -- --output-path=./dist/out --output-hashing=all

# Stage 2: Serve it using Ngnix
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
    