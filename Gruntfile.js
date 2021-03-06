module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            main: {
                files: {
                    'public/css/main.css': 'gain12/component/base/main.scss'
                }
            }
        },
        cssmin: {
            main: {
                options: {
                    banner: '/* Copyright Gain12 */'
                },
                files: {
                    'public/css/main.css': ['public/css/main.css']
                }
            }
        },
        watch: {
            main: {
                files: [
                    'gain12/component/**/*.scss',
                    '!gain12/component/base/main.scss'
                ],
                tasks: ['default']
            }
        },
        concat: {
            main: {
                src: [
                    'gain12/component/*/*.scss'
                ],
                dest: 'gain12/component/base/main.scss'
            }
        },
        remove: {
            main: {
                fileList: ['gain12/component/base/main.scss']
            }
        }
    });

    // Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-remove');

    // Tasks
    grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'remove']);
    grunt.registerTask('clean-css', ['concat', 'sass', 'remove']);
    grunt.registerTask('watch-files', ['default', 'watch']);
};
