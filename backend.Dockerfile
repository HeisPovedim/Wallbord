FROM node:15-alpine as build
RUN apk update && apk --no-cache upgrade && apk --no-cache add jq
WORKDIR /src

COPY ./backend/package*.json /src/
RUN yarn

COPY ./backend /src
RUN yarn build

ARG COMMIT_SHA=unknown
ARG COMMIT_REF_NAME=unknown
ARG CI_COMMIT_SHA=unknown

# RUN cat /src/dist/config/defaultConfig.json \
#     | jq ".version.hash=\"${COMMIT_SHA}\"" \
#     | jq ".version.branch=\"${COMMIT_REF_NAME}\"" \
#     | jq ".version.buildDate=\"$(date +%FT%T)\"" \
#     | jq ".version.hashKapitan=\"${CI_COMMIT_SHA}\"" \
# > /src/dist/config/defaultConfig.json.tmp && cp /src/dist/config/defaultConfig.json.tmp /src/dist/config/defaultConfig.json && \
# rm /src/dist/config/defaultConfig.json.tmp

########

FROM node:15-alpine as result
WORKDIR /app
EXPOSE 4000
CMD [ "/backend-start.sh" ]

RUN apk --no-cache add curl jq

COPY ./deploy/backend-start.sh /
RUN chmod +x /backend-start.sh

COPY --from=build /src/node_modules /app/node_modules
COPY --from=build /src/dist/package.json /app/
COPY --from=build /src/dist /app/dist
