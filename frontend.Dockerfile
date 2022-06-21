FROM node:15-alpine as build_frontend
WORKDIR /src

RUN npm install -g pnpm

COPY ./frontend/package*.json ./
RUN pnpm install

COPY ./frontend ./
RUN pnpm build

ARG COMMIT_SHA=unknown
ARG COMMIT_REF_NAME=unknown

RUN echo "{ \"hash\": \"${COMMIT_SHA}\", \"branch\": \"${COMMIT_REF_NAME}\", \"buildDate\": \"$(date +%FT%TZ)\" }" > /src/dist/version.json

###############

FROM nginx:latest as build_nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d/
COPY ./nginx/includes/ /etc/nginx/includes/

RUN ls -al /etc/nginx && ls -al /etc/nginx/conf.d && cat /etc/nginx/conf.d/default.conf && nginx -t

################

FROM nginx:stable-alpine as result
EXPOSE 80
ENTRYPOINT [ "/frontend-start.sh" ]

RUN apk add --update --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ --allow-untrusted \
    curl jq && \
    rm -rf /tmp/* /var/cache/apk/*

COPY --from=build_nginx /etc/nginx /etc/nginx
COPY --from=build_frontend /src/dist /var/www/html
ADD ./deploy/frontend-start.sh /
RUN chmod +x /frontend-start.sh
