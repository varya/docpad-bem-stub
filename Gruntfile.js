module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bem: {
            options: {
                require: './node_modules/bem',
                root: './'
            },
            bundles: {
                targets: 'desktop.bundles'
            }
        },
        shell: {
            enb: {
                command: './node_modules/enb/bin/enb make'
            }
        },
        copy: {
            blocks: {
                files: {
                    "out/": ["desktop.blocks/**/*"]
                }
            },
            bundles: {
                files: {
                    "out/": ["desktop.bundles/*/*.min.*", "desktop.bundles/*/*.html"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bem');
    grunt.loadNpmTasks('grunt-shell');

}
