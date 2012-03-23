[![Build Status](https://secure.travis-ci.org/there4/jquery-animatedborder.png?branch=master)](http://travis-ci.org/there4/jquery-animatedborder)

# Animated Border

Animated borders for any block level element.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/there4/animatedborder/master/dist/jquery.animatedborder.min.js
[max]: https://raw.github.com/there4/animatedborder/master/dist/jquery.animatedborder.js

And then include the css into your site styles and make the image available.

In your web page:

```html

<script src="jquery.js"></script>
<script src="dist/jquery.animatedborder.min.js"></script>
<script>
jQuery(function($) {
  $('div.bordered').animatedBorder({size : 1, color : 'red'});
});
</script>

```

## Documentation
The animated borders have two settings that are set at initialization.

```{'size':size, 'color' : color}```

* `size` is an integer in pixels
* `color` is a string, accepting any valid css color. This can be a name or a hex code with a leading hash sign.

## Examples
There are examples available at [there4development.com](http://there4development.com/projects/animatedborder/).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History

* Sep 10, 2011 - Initial release on github, relocated from jQuery plugins.
* Mar 23, 2012 - Update with a new build system to run automated tests

## License
Copyright (c) 2012 Craig Davis  
Licensed under the MIT license.
