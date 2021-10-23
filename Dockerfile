FROM node:13-alpine as build

RUN apk --update add autoconf automake libtool gcc make g++ zlib-dev
WORKDIR /app
ADD . ./
RUN npm ci
RUN npm run build

FROM alpine

COPY --from=build /app/public /pub

ADD ./scripts/nginx-boot.sh /sbin/nginx-boot

RUN chmod +x /sbin/nginx-boot && \
  apk --update add nginx bash && \
  rm -fR /var/cache/apk/*

CMD [ "/sbin/nginx-boot" ]
EXPOSE 80
