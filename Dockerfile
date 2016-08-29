FROM quay.io/eris/build@sha256:f7208830eda8e2de3de4fc57ecc60f1850bb1f3ffa39282b903ea3beff891df7
MAINTAINER Eris Industries <support@erisindustries.com>

ENV NODE_VERSION=6.3.1-r0 HUGO_VERSION=0.16

RUN apk add --no-cache automake autoconf nasm zlib-dev g++ make python nodejs=$NODE_VERSION && \
  go get github.com/spf13/hugo && \
  cd $GOPATH/src/github.com/spf13/hugo && \
  git checkout v$HUGO_VERSION && \
  go build -o $INSTALL_BASE/hugo . && \
  go get github.com/campoy/embedmd && \
  cd $GOPATH/src/github.com/campoy/embedmd && \
  go build -o $INSTALL_BASE/embedmd . && \
  cd / && \
  rm -rf $GOPATH && \
  npm install -g gulp bower

COPY ./package.json /site/package.json
COPY ./.bowerrc /site/.bowerrc
COPY ./bower.json /site/bower.json
WORKDIR /site
RUN npm install && \
  bower install --allow-root

ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG AWS_DEFAULT_REGION
ARG AWS_BUCKET_NAME

COPY . /site
RUN gulp build && \
  hugo && \
  gulp deploy
