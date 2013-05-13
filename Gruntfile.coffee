module.exports = (grunt) ->
	grunt.loadNpmTasks 'grunt-contrib-clean'
	grunt.loadNpmTasks 'grunt-contrib-jshint'
	grunt.loadNpmTasks 'grunt-contrib-less'
	grunt.loadNpmTasks 'grunt-contrib-requirejs'
	grunt.loadNpmTasks 'grunt-customize-bootstrap'

	grunt.initConfig
		pkg:
			grunt.file.readJSON 'package.json'

		clean:
			production: [
				'server/public'
			]

		jshint:
			options:
				jshintrc: '.jshintrc'
			src:
				options:
					node: false
					src: ['src/**/*.js']
			server:
				options:
					browser: false
				files:
					src:[
						'server/**/*.js'
						'!server/public/*'
					]

		customize_bootstrap:
			production:
				options:
					responsive: true
					components: 'components'
					src: 'src/stylesheets/bootstrap'
					dest: '.tmp'

		less:
			preview:
				'.tmp/bootstrap.css': '.tmp/bootstrap.less'
				'.tmp/bootstrap-responsive.css': '.tmp/respoinsive.less'
			production:
				options:
					yuicompress: true
				files:
					'server/public/style.min.css': [
						'.tmp/bootstrap.less'
						'.tmp/responsive.less'
					]

		requirejs:
			compile:
				options:
					name: 'app'
					baseUrl: 'src/javascripts'
					paths:
						# Unfortunately, it seems that the paths object needs to be
						# duplicates from main.js since the components path is slightly
						# different.
						backbone: '../../components/backbone/backbone',
						jquery: '../../components/jquery/jquery',
						'backbone.babysitter': '../../components/backbone.babysitter/lib/amd/backbone.babysitter',
						marionette: '../../components/backbone.marionette/lib/core/amd/backbone.marionette',
						'backbone.wreqr': '../../components/backbone.wreqr/lib/amd/backbone.wreqr',
						underscore: '../../components/lodash/lodash',
						tpl: '../../components/requirejs-tpl/tpl',
						templates: '../templates'
					mainConfigFile: 'src/main.js'
					out: 'server/public/app.min.js'

		# TODO grunt-rev (cache busting)
		# TODO use CDNs for all possible libraries
		# TODO grunt-contrib-httpmin

	grunt.registerTask 'production', [
		'clean'
		'jshint'
		'customize_bootstrap:production'
		'less:production'
		'requirejs'
	]

	grunt.registerTask 'default', 'production'
