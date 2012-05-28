/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! CSS Selectors - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://PROJECT_WEBSITE/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Wilkins F.; Licensed MIT */'
    },
    lint: {
      files: ['assets/js/selectors.js']
    },
    concat: {
      dist: {
        src: ['assets/js/zepto.min.js', 'assets/js/temp.js'],
        dest: 'dist/script.js'
      }
    },
    min: {
      dist: {
        src: ['assets/syntaxHighlighter/shCore.js', 'assets/syntaxHighlighter/shBrushJScript.js', 'assets/syntaxHighlighter/shBrushXml.js', 'assets/js/selectors.js'],
        dest: 'assets/js/temp.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        jquery:true
      },
      globals: {}
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint min concat');

};
