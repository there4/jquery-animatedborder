/*global module*/
/*
 * grunt
 * https://github.com/cowboy/grunt
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * http://benalman.com/about/license/
 */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: '<json:package.json>',

    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("m/d/yyyy") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },

    concat: {
      dist: {
        src: ['<banner:meta.banner>', 'src/jquery.animatedborder.js'],
        dest: 'dist/jquery.animatedborder.js'
      }
    },

    min: {
      dist: {
        src: ['<banner:meta.banner>', 'dist/jquery.animatedborder.js'],
        dest: 'dist/jquery.animatedborder.min.js'
      }
    },

    qunit: {
      all: ['test/**/*.html']
    },

    lint: {
      files: ['grunt.js', 'src/*.js', 'test/**/*.js']
    },

    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },

    jshint: {
      options: {
        onevar: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },

    uglify: {}
  });

  // Default task will build for deployment
  grunt.registerTask('default', 'lint qunit concat min');

  // Shortcut to standardize this between my repos, some run jasmine,
  // and some run qunit, some run both.
  grunt.registerTask('test', 'qunit');

};
