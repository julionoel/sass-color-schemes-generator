/*
 * palettable
 *
 *
 * Copyright (c) 2014 Brian Vaughn
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Before generating any new files, remove any previously-created files.
        clean: ["css/"],

        sass: {
            options: { // Target options
                style: 'compact'
            },


            'blue': {
                src: 'scss/schemes/blue.scss',
                dest: 'css/style_blue.css'
            },
            'green': {
                src: 'scss/schemes/green.scss',
                dest: 'css/style_green.css'
            },
            'purple': {
                src: 'scss/schemes/purple.scss',
                dest: 'css/style_purple.css'
            },
            'orange': {
                src: 'scss/schemes/orange.scss',
                dest: 'css/style_orange.css'
            },

        },
        // Configuration to be run (and then tested).
        palettable: {
            options: {
                outputFilePath: 'tmp/palettable.html',
                stylesDirectory: 'css/',
                templateLayoutPath: 'test/templates/layout.html',
                templateSwatchPath: 'test/templates/swatch.html'
            }
        },



    });

    // Actually load this plugin's task(s).
    //grunt.loadTasks('tasks');

    grunt.registerTask('palettable', ['clean', 'palettable'], function() {
        grunt.log.write('Palettable ready...').ok();
    });


    grunt.registerTask('default', ['clean', 'sass']);

}
