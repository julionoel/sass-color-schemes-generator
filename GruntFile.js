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


    var themesFolder = 'C:/wp/optima/mobile/sites2/all/themes/';
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
        clean: ['css/'],
        jshint: {
            all: [
                '*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
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
                stylesDirectory: 'css/',
                templateLayoutPath: 'test/templates/layout.html',
                templateSwatchPath: 'test/templates/swatch.html'
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
        }



    });

    // Actually load this plugin's task(s).
    //grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-css-purge');

    grunt.registerTask('palettable', ['clean', 'palettable'], function() {
        grunt.log.write('Palettable ready...').ok();
    });


    grunt.registerTask('build', ['jshint','clean', 'sass', 'copy']);
};
