FROM quay.io/monax/build:0.17
MAINTAINER Monax <support@monax.io>

ENV HUGO_VERSION=v0.18.1

RUN apk add --no-cache --update openssh automake autoconf nasm g++ make

RUN apk add --no-cache zlib-dev python nodejs

RUN go get github.com/kardianos/govendor && \
  cd $GOPATH/src/github.com/kardianos/govendor && \
  go build -o $INSTALL_BASE/govendor . && \
  go get github.com/spf13/hugo && \
  cd $GOPATH/src/github.com/spf13/hugo && \
  git checkout $HUGO_VERSION && \
  govendor sync && \
  go build -o $INSTALL_BASE/hugo . && \
  cd / && \
  rm -rf $GOPATH

RUN npm install -g gulp bower

WORKDIR /site
COPY package.json /site/package.json
COPY .bowerrc /site/.bowerrc
COPY bower.json /site/bower.json

RUN npm install && \
  bower install --allow-root

USER $USER
RUN git config --global user.email "billings@monax.io" && \
  git config --global user.name "Billings, the Bot"
