module.exports = function(config)
{
	config.set({
		basePath: '../..',
		frameworks: ['jasmine'],
		client: {
			jasmine: {
				random: true,
				seed: '4321',
				oneFailurePerSpec: true,
				failFast: true,
				timeoutInterval: 1000
			}
		},
		autoWatch: true,
		browsers: ['Chrome' /* , 'Firefox' */],
		//logLevel: config.LOG_DEBUG,
		proxies: {
		},
		files: [
			{ pattern: 'spec/*.json', served: true, included: false, watched: false, nocache: false },
			'hummersmyth.js',
			'spec/*Spec.js'
		],

		// Coverage reporter generates the coverage.
		reporters: ['progress']
	});
};
