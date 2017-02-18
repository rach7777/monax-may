# Install

Clone this repository to your computer.

Make sure Docker is installed (ask a marmot to help you if you need it).

# Usage

It should be fairly simple to use the site. It can be built and served either using docker or npm, bower, gulp, and hugo locally.

## Non-docker development usage

You will need to install npm, bower, gulp, and hugo locally, then from the project root:

```bash
# Install npm dependencies (from the package.json)
npm install

# Install bower dependencies
bower install

# Build the gulp pipeline (and wait around to watch for changes)
gulp watch

# In another terminal
hugo serve
```

This should dynamically regenerate the pipeline assets and reload the site as needed while you develop.

## I want to see the site locally

Run the following from a bash terminal.

```
scripts/serve
```

Then go to http://localhost:1313 in your browser.

**On OSX / Windows** -- you will need to ensure that a `site` docker-machine is available. If you do not have one available then run:

```
docker-machine create --driver virtualbox site
```

Note that on OSX/Windows the mounting of the volumes doesn't fully work so there is no live reloading.

**N.B.** -- the first time you run the `serve` script it will take a wee while. After that it will be much faster.

## Changes you can make

You can make changes to the files in the following directories and the site will be rebuilt and reloaded for you:

* content
* layouts
* source/js
* source/css

Any changes outside of those will require you to CTRL+c out of the script. Instructions will be displayed for what to do now.

Any changes outside of the (content) directory require @compleatang's approval. Otherwise have at it.

## Clean up locally

.gitignore should handle most everything.

However, if you want to remove everything then do all of the following:


```
docker rmi site_buildr
docker rmi site
rm -rf ./public
```

Then you can start again with a fresh deck.

# Structure

* archetypes -- templates for content
* content -- where our content goes
* layouts -- templates for each display page
* scripts -- things you can run
* source -- where data files, css, js, fonts, etc. go

