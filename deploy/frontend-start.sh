#!/bin/sh

set -euo pipefail

echo "Starting"

cat /etc/nginx/conf.d/default.conf \
    | sed "s|    set \$w_backend .*;|    set \$w_backend ${W_BACKEND_URL};|" \
> /etc/nginx/conf.d/default.conf.tmp
cp /etc/nginx/conf.d/default.conf.tmp /etc/nginx/conf.d/default.conf
rm /etc/nginx/conf.d/default.conf.tmp

# cat /var/www/html/config.json \
#     | jq ".apiUrl=\"${W_PUBLIC_URL}\"" \
# > /var/www/html/config.json.tmp
# cp /var/www/html/config.json.tmp /var/www/html/config.json
# rm /var/www/html/config.json.tmp

echo "resolver ${W_DNS_RESOLVER} ipv6=off;" > /etc/nginx/includes/resolver.conf

echo "Validating..."
nginx -t || exit 1
echo "Running..."
nginx -g 'daemon off;'
