module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['spec/**/*.js']
      }
    },
    browserify: {
      dist: {
        files: {
          'build/depinify.js': ['src/depinify.js'],
        }
      }
    }
  });
  grunt.registerTask('test', 'mochaTest');
  grunt.registerTask('default', ['test', 'browserify']);
};
