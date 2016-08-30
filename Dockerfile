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

RUN mkdir /site

WORKDIR /site
ADD ./package.json /site/package.json
ADD ./.bowerrc /site/.bowerrc
ADD ./bower.json /site/bower.json
RUN npm install && \
  bower install --allow-root

ONBUILD ADD . /site
ONBUILD RUN gulp build && \
  hugo
