
'use strict';

module.exports = function(grunt)
{
	// Project configuration.
	grunt.initConfig(
	{
		pkg: grunt.file.readJSON('package.json'),

		uglify:
		{
			options:
			{
				banner: '/*! <%= pkg.name %> V<%= pkg.version %>, Copyright (c) 2013-present, Belexos GmbH. MIT licensed. */'
			},
			build: {
				src: '<%= pkg.name %>.js',
				dest: '<%= pkg.name %>.min.js'
			}
		},

		watch:
		{
			scripts:
			{
				files: [ '<%= pkg.name %>.js' ],
				tasks: [ 'default' ],
				options:
				{
					interrupt: true
				}
			}
		}

	});

	// Load the plugins.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Build task(s).
	grunt.registerTask('build', [ 'uglify:build' ]);

	// Default task(s).
	grunt.registerTask('default', [ 'build' ]);
};
