module.exports = function(grunt) {
   
   "use strict";

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
   
    less:{
      development:{
        options:{
          paths:['less']
        },
        files:{
          'css/default.css':'less/default.less'
        }  
      }
    },
    copy:{
      main:{
        files:[
          {src:['css/*.css'], dest:'dist/'},
          {src:['*.htm'], dest:'dist/'},
          {src:['js/*.js'], dest:'dist/'}
        ]
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      less:{
        files:['less/*.less'],
        tasks:['less:development'],
        options: {
            spawn: false
        }
      },
      copy:{
        files:['css/*.css','*.htm','js/*.js'],
        tasks:['copy'],
        options: {
            spawn: false,
        }
      }
    }
  });

  // Load the plugin that provides the "html-inspector" task.
  //grunt.loadNpmTasks('grunt-html-inspector');

  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-less');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy','watch']);

};