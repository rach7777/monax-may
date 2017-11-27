FROM registry.code.monax.io/monax/monax.io/builder:latest
ARG SITE_NAME
ARG BUILD_DIR
ADD . /site

RUN gulp build

RUN hugo \
  --verbose \
  --canonifyURLs \
  --baseURL="https://$SITE_NAME"

RUN mv /site/public $BUILD_DIR && \
  rm -rf /site
WORKDIR /
