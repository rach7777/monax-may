FROM quay.io/eris/build
MAINTAINER Eris Industries <support@erisindustries.com>

ENV NODE_VERSION=6.5.0-r0 HUGO_VERSION=0.16

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

RUN mkdir /site && \
  chown -R $USER:$USER /site

USER $USER
WORKDIR /site
ADD ./package.json /site/package.json
ADD ./.bowerrc /site/.bowerrc
ADD ./bower.json /site/bower.json

# [csk] some weird bug in node 6.5.0 and npm 3.10.3 that I don't have time to fix
RUN npm install vinyl-source-stream vinyl-buffer prismjs gulp-uglify gulp-shell gulp-sass && \
  npm install babelify babel-preset-es2015 && \
  npm install && \
  bower install

ONBUILD ADD . /site
ONBUILD RUN gulp build --staging
