module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
			//src: ['src/js/vendor/*.js','src/js/*.js'],
			src: ['src/bower_components/jquery/dist/jquery.min.js',
						'src/bower_components/angular/angular.min.js', 
						'src/bower_components/angular-ui-utils/ui-utils.min.js', 
						'src/bower_components/ng-grid/ng-grid-2.0.14.min.js', 
						'src/js/app.js',
						'src/js/services.js',
						'src/js/controllers.js',
						'src/js/filters.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    copy: {
      main: {
      	files: [ { expand: true, cwd: 'src/css/', src: ['**'], dest: 'dist/css/' } ]
//         src: 'src/css/main.css',
//         dest: 'dist/css/main.css',
      },
    },
    targethtml: {
      dist: {
        files: {
          'dist/index.html': 'src/index.html'
        }
      }
    },
    karma: {
      unit: {
        configFile: 'conf/karma.conf.js',
        singleRun: true
      }
    },
    protractor: {
      e2e: {
        options: {
          configFile: 'conf/protractor.conf.js'
        } 
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.registerTask('dist', ['karma', 'protractor', 'concat', 'targethtml', 'copy']);
};