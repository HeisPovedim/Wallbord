#!/bin/sh

# cat /app/dist/config/defaultConfig.json \
#     | jq ".appInsights.ikey=\"${W_appInsights__ikey}\"" \
# >/app/dist/config/defaultConfig.json.tmp
# cp /app/dist/config/defaultConfig.json.tmp /app/dist/config/defaultConfig.json
# rm /app/dist/config/defaultConfig.json.tmp

# cat /app/ormconfig.json \
#     | jq ".type=\"${W_type}\"" \
#     | jq ".host=\"${W_host}\"" \
#     | jq ".port=\"${W_port}\"" \
#     | jq ".username=\"${W_username}\"" \
#     | jq ".password=\"${W_password}\"" \
#     | jq ".database=\"${W_database}\"" \
# >/app/ormconfig.json.tmp
# cp /app/ormconfig.json.tmp /app/ormconfig.json
# rm /app/ormconfig.json.tmp

node /app/dist/src/index.js
