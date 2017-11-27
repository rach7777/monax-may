FROM registry.code.monax.io/monax/monax.io/builder:latest
ARG SITE_NAME
ARG BUILD_DIR
ADD . /site
WORKDIR /site

# TODO: migrate off bower onto yarn;
# unfuck gulp (or lose it entirely);
# simplify all the buggy js.
RUN npm install && \
  bower install --allow-root && \
  gulp build

RUN hugo \
  --verbose \
  --canonifyURLs \
  --destination=$BUILD_DIR \
  --baseURL="https://$SITE_NAME"

# RUN minify \
#   --verbose \
#   --html-keep-document-tags \
#   --recursive \
#   --output \
#   $BUILD_DIR/ $BUILD_DIR/

WORKDIR $BUILD_DIR
