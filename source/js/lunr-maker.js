"use strict";

var fs       = require('fs'),
    matter   = require('gray-matter'),
    path     = require('path'),
    removeMd = require('remove-markdown'),
    through2 = require('through2'),
    yaml     = require('js-yaml');

module.exports = function(opts) {
  var index = [];
  var team = yaml.safeLoad(fs.readFileSync(opts.team, 'utf8'));

  return through2.obj(
    function(file, encoding, next) { // transform function
      if (!file.isDirectory()) { // skip processing directories (which gulp stream gives us)
        index.push(lunrize(file, opts, team));
      }
      next();
    },
    function(next) { // flush function
      index = index.filter(function(e) {return e != null;}) // don't send noops to the JSON
      return fs.writeFile(opts.output, JSON.stringify(index), next);
    });
};

function lunrize(file, opts, team) {
  // these regex's are *not* sent to the processor for indexing
  var homeRegexp = /\/home_.*\//g;
  var draftsRegexp = /\/blog\/drafts/g;
  var docsRegexp = /\/docs\/documentation\/.*?\/\d+\.\d+\.\d+/g;

  // skip these
  if (homeRegexp.test(file.path) || (draftsRegexp.test(file.path)) || (docsRegexp.test(file.path))) {
    return;
  }

  // process these
  return processMDFile(file, opts, team);
}

function processMDFile(file, opts, team) {
  // read meta
  var meta = matter.read(file.path, {delims: '---', lang:'yaml'});
  if (meta === null){ // try toml
    meta = matter.read(file.path, {delims: '+++', lang:'toml'});
  }

  // check if deprecated
  if (meta.data.deprecated) {
    return;
  }

  // process title
  if (meta.data.title != undefined) {
    var title = removeMd(meta.data.title)
  } else {
    return;
  }

  // process contents
  // TODO - strip code samples...?
  var plainText = removeMd(meta.content, {
    stripListLeaders: true,
    gfm: true
  });
  if (plainText == '') { // don't populate blank pages
    return;
  }

  // process uri
  var uri = '/' + file.path;
  uri = uri.replace(path.resolve(opts.baseDir) + '/', '');
  if (meta.data.slug != undefined) { // slugs overwrite filepath
    uri = path.dirname(uri) + meta.data.slug;
  }
  if (meta.data.url != undefined) { // url overwrites slugs + filepath
    uri = meta.data.url
  }
  uri = uri.replace('.md', '/');

  // process categories which can be strings or arrays
  var categories = [];
  if (meta.data.categories != undefined) {
    categories = meta.data.categories;
  }
  if (meta.data.category != undefined) {
    categories.push(meta.data.category);
  }

  // process tags
  var tags = [];
  if (meta.data.tags != undefined) {
    tags = meta.data.tags;
  }

  // process author
  var author = "";
  if (meta.data.author != undefined) {
    author = team[meta.data.author].name;
  }

  // process excerpt
  var excerpt = "";
  if (meta.data.excerpt != undefined) {
    excerpt = meta.data.excerpt;
  }

  // add date so we can filter results based on newest first
  var date = "";
  if (meta.data.date != undefined) {
    date = meta.data.date;
  } else {
    date = "2050-01-01T00:00:00Z"
  }

  return {'uri': uri, 'title': title, 'date': date, 'author': author, 'excerpt': excerpt, 'categories': categories, 'tags': tags, 'content': plainText};
}

