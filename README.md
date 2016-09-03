# Monax Industries'

This is the new site. If you would like to participate, then great!

## Install

Clone this repository to your computer.

Make sure Docker is installed (ask a marmot to help you if you need it).

## I want to see the site locally

Run the following from a bash terminal.

```
scripts/serve
```

Then go to http://localhost:1313 in your browser.

You can make changes to the files in the following directories and the site will be rebuilt and reloaded for you:

* content
* layouts
* source/js
* source/css

Any changes outside of those will require you to CTRL+c out of the script. Instructions will be displayed for what to do now.

**N.B.** -- the first time you run the `serve` script it will take a wee while. After that it will be much faster.

## Changes you can make

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

## Structure

* archetypes -- templates for content
* content -- where our content goes
* data -- where data goes
* layouts -- templates for each display page
* scripts -- things you can run
* source -- where css, js, fonts, etc. go

**Ignore the below**

```
{{ .Date.Format "2006" | printf "/images/%s/%s" . $.Params.thumbnail }}
```