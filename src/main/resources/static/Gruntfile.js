/**
 * Created by Viktor Moroz on 12/15/15.
 */


module.exports = function(grunt) {
    'use strict';

    var appDirectory = "build";

    grunt.initConfig({
        concat : {
            js_app : {
                src : ['app/app.js', 'app/services/fileUpload.js', 'app/services/*.js', 'app/controllers/*.js', 'app/**/*.js'],
                dest : appDirectory + '/js/application.js'
            },
            js_vendor : {
                src : getVendorJsLibs(),
                dest : appDirectory + '/js/vendor.js'
            },
            css_vendor : {
                src : ['lib/**/*.css'],
                dest : appDirectory + '/css/vendor.css'
            }
        },
        clean : [appDirectory],
        uglify : {
            js : {
                options : {
                    mangle: false
                },
                files : {
                    'app/js/application.min.js' : [appDirectory + '/js/vendor.js', appDirectory + '/js/application.js']
                }
            }
        },
        jshint: {
            options: {
                bitwise: true,
                curly: true,
                funcscope: true
                //varstmt: true
                //unused: true

            },
            js: ['Gruntfile.js', 'js/**/*.js']
        }
       /* less: {
            my: {
                files: {
                    'app/css/application.css' : ['less/build.less']
                }
            }
        }*/
    });
    grunt.registerTask('default', ['jshint', 'clean', 'concat']);
    grunt.registerTask('prod', ['jshint', 'clean', 'uglify', 'concat', 'less']);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
   // grunt.loadNpmTasks('grunt-contrib-less');

    function getVendorJsLibs() {
        return ['jquery', 'angular','angular-translate', 'angular-cookies',  'angular-translate-loader-url', 'angular-route', 'bootstrap']
            .map(function(lib) {
                return lib.indexOf("angular") === 0 ?
                "lib/angular/" + lib + ".min.js" : "lib/" + lib + ".min.js";
            });
    }
};