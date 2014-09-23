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


    var themesFolder = 'C:/wp/optima/mobile/sites/all/themes/';
    var betpackFolder = themesFolder + '/betpack';
    var gobetFolder = themesFolder + '/gobet';
    var gobetCyprusFolder = themesFolder + '/gobetCyprus';
    var gobetKenyaFolder = themesFolder + '/gobetKenya';
    var goldenparkFolder = themesFolder + '/goldenpark';
    var optimaFolder = themesFolder + '/optima';
    var optimaisrFolder = themesFolder + '/optimaisr';
    var stanjamesFolder = themesFolder + '/stanjames';


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Before generating any new files, remove any previously-created files.
        clean: ['css/', 'tmp/'],
        jshint: {
            all: [
                'Gruntfile.js',
                '*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },

        sass: {
            options: { // Target options
                sourcemap: 'none',
                style: 'compact',
                trace: false
            },


            'blue': {
                src: 'scss/schemes/blue.scss',
                dest: 'css/blue/theme.css'
            },
            'green': {
                src: 'scss/schemes/green.scss',
                dest: 'css/green/theme.css'
            },
            'purple': {
                src: 'scss/schemes/purple.scss',
                dest: 'css/purple/theme.css'
            },
            'orange': {
                src: 'scss/schemes/orange.scss',
                dest: 'css/orange/theme.css'
            },

        },

        palettable: {
            options: {
                outputFilePath: 'tmp/palettable.html',
                stylesDirectory: 'scss/schemes/',
                templateLayoutPath: 'templates/layout.html',
                templateSwatchPath: 'templates/swatch.html'
            }
        },
        copy: {
            build: {
                files: [{
                    src: 'css/orange/theme.css',
                    dest: betpackFolder + '/css/theme.css'
                }, {
                    src: 'css/green/theme.css',
                    dest: gobetFolder + '/css/theme.css'
                }, {
                    src: 'css/green/theme.css',
                    dest: gobetKenyaFolder + '/css/theme.css'
                }, {
                    src: 'css/green/theme.css',
                    dest: gobetCyprusFolder + '/css/theme.css'
                }, {
                    src: 'css/purple/theme.css',
                    dest: goldenparkFolder + '/css/theme.css'
                }, {
                    src: 'css/blue/theme.css',
                    dest: optimaisrFolder + '/css/theme.css'
                }, {
                    src: 'css/blue/theme.css',
                    dest: optimaFolder + '/css/theme.css'
                }, {
                    src: 'css/green/theme.css',
                    dest: stanjamesFolder + '/css/theme.css'
                }]
            }
        },

        watch: {
            stylesheets: {
                files: 'scss/style.scss',
                tasks: ['build'],
                options: {
                    livereload: true,
                },
            },
        },



    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    grunt.registerTask('html', ['clean', 'sass', 'palettable']);

    grunt.registerTask('build', ['jshint', 'clean', 'sass', 'copy']);

    grunt.registerTask('dev', ['build', 'watch']);
};
