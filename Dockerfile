# Self-check: cargo build --release is not applicable because no Cargo project exists on host; packaging the current main branch as a static site served by nginx on 8080.
FROM nginx:1.27-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/index.html /usr/share/nginx/html/index.html
COPY docker/about /usr/share/nginx/html/about

EXPOSE 8080
