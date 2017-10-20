/*global module*/
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

    uglify: {
      dist: {
        files: {
          'dist/jquery.animatedborder.min.js': ['<banner:meta.banner>', 'dist/jquery.animatedborder.js']
        }
      }
    },

    qunit: {
      all: ['test/**/*.html']
    },

    watch: {
      files: '<config:lint.files>',
      tasks: ['lint', 'qunit']
    },

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        onevar : true,
        curly  : true,
        eqeqeq : true,
        immed  : true,
        latedef: true,
        newcap : true,
        noarg  : true,
        sub    : true,
        undef  : true,
        eqnull : true,
        browser: true,
        globals: {
          jQuery: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task will build for deployment
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

  // Shortcut to standardize this between my repos, some run jasmine,
  // and some run qunit, some run both.
  grunt.registerTask('test', 'qunit');
};
