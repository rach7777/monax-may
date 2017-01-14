FROM quay.io/eris/build
MAINTAINER Monax <support@monax.io>

ENV HUGO_VERSION=v0.18.1

RUN apk add --no-cache openssh automake autoconf nasm zlib-dev g++ make python nodejs && \
  go get github.com/kardianos/govendor && \
  cd $GOPATH/src/github.com/kardianos/govendor && \
  go build -o $INSTALL_BASE/govendor . && \
  go get github.com/spf13/hugo && \
  cd $GOPATH/src/github.com/spf13/hugo && \
  git checkout $HUGO_VERSION && \
  govendor sync && \
  go build -o $INSTALL_BASE/hugo . && \
  cd / && \
  rm -rf $GOPATH && \
  npm install -g gulp bower

WORKDIR /site
ADD ./package.json /site/package.json
ADD ./.bowerrc /site/.bowerrc
ADD ./bower.json /site/bower.json

# [csk] some weird bug in node 6.5.0 and npm 3.10.3 that I don't have time to fix
RUN npm install vinyl-source-stream vinyl-buffer prismjs && \
  npm install gulp-sass gulp-uglify gulp-shell && \
  npm install babelify babel-preset-es2015 && \
  npm install && \
  bower install --allow-root

USER $USER
RUN git config --global user.email "billings@monax.io"
RUN git config --global user.name "Billings, the Bot"
