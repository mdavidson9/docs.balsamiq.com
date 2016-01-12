# About
The repository behind https://docs.balsamiq.com - a gohugo.io-powered, S3-hosted website for the Balsamiq documentation.

If you are viewing this repository with the intention of using the theme, please note that you will have to modify the includes, removing our specific assets referenced from balsamiq.com. We use Bootstrap 3, so you can just replace the section of includes under B.COM CSS and B.COM JS in the theme file layouts/partials/header.html. Instead use, for instance the HTML in https://www.bootstrapcdn.com/

# Content
* Add new files to the content/(section name) directory with a .md extensions. Markdown is accepted, and HUGO's [front matter](http://gohugo.io/content/front-matter/) is expected for the navigation to work properly.
* It's recommended that you create new docs using the command line to add the file to the content directory with archetype templates. This inserts and formats the front matter into the article properly, including parent and creation date.
  * $ hugo new mybalsamiq/mypage.md
* To change the order of how articles appear on the Product overviews add a weight to the front matter.
* For help with Markdown, see [this cheatsheet](https://beegit.com/markdown-cheat-sheet) or [this one](http://thisismarkdown.com)
* Markdown doesn't allow markdown syntax inside an HTML block element (a \<div\> or \<p\>, for example), so you can use this "hack" to convert an inline element to a block element using a Bootstrap helper class (".show") (for info and warning alert messages, for example)
	* Info alerts:  
	```	{{% alert info %}}**Note:** You can also export a project to PDF from the context menu on the [All Projects (a.k.a. Home) page](/mybalsamiq/home/) in myBalsamiq.{{% /alert %}}```
	* Warning alerts:  
	```	{{% alert warning %}}**Note:** You can also export a project to PDF from the context menu on the [All Projects (a.k.a. Home) page](/mybalsamiq/home/) in myBalsamiq.{{% /alert %}}```

# HUGO Usage

## Running Hugo
* Run ./launchHugo.sh (or $ hugo server --watch)
* If page hierarchy has been altered from previous build, remove public/ directory first, then run hugo.
* To build hugo without watch, just run $ hugo
* To use with LiveReload, <a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei">install the extension for Chrome</a>.
* Open http://localhost:1313 to see your site.

## Running Gulp to rebuild CSS/JS Assets

### Installing Gulp
* Make sure you have gulp installed (https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). If you don't run this:
  * $ sudo npm install -g gulp
* Or Install gulp in your project devDependencies:
  * $ npm install --save-dev gulp
* Install dev dependencies by running this from terminal in docs.balsamiq.com directory:
  * $ npm install

### Updating Gulp
* To update globally: $ npm update gulp -g
* To update a local instance: cd /your/folder/ then: $ npm update gulp

### Running Gulp Tasks Once
* All Gulp tasks
  * $ gulp
* Just CSS
  * $ gulp sass
* Just JS
  * $ gulp js


### Running Gulp during development (LiveReload)
* If you're working on SASS or JS, run gulp using "watch" to rebuild css/js files as you make changes to them.
  * $ gulp watch dev
* or you can run ./launchGulp.sh
* If you think the balsamiq.com \_config.scss file has changed, you can copy a new version here before running the sass task.
  * $gulp getsassconfig  
