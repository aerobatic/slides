module.exports = function(grunt) {
  grunt.initConfig({
    favicons: {
      options: {
        appleTouchBackgroundColor: "#ffffff"
      },
      icons: {
        src: 'favicon.png',
        dest: 'favicons'
      }
    },
    watch: {
      options: {
        spawn: true,
        livereload: true
      },
      index: {
        files: ['index.jade'],
        tasks: ['jade']
      },
      css: {
        files: ['css/*.css'],
        livereload: true
      },
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['uglify']
      }
    },
    jade: {
      compile: {
        files: {
          "index.html": ["index.jade"]
        }
      }
    },
    aerobatic: {
      // These are the files that should be deployed to the cloud.
      deploy: {
        src: ['index.html', 'images/*', 'favicons/*.*', 'css/**/*.css', 'lib/font/*.*']
      },
      sim: {
        index: 'index.html',
        port: 3000,
        livereload: true
      }
    }
  });

  grunt.registerTask('build', ['jade']);

  // Specify the sync option to avoid blocking the watch task
  grunt.registerTask('sim', ['build', 'aerobatic:sim:sync', 'watch']);

  // Create a deploy alias task which builds then deploys to aerobatic in the cloud
  grunt.registerTask('deploy', ['build', 'aerobatic:deploy']);

  grunt.loadNpmTasks('grunt-aerobatic');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-favicons');
};
