export function config(logEnhancerProvider, $httpProvider, toastrConfig, appConfig) {
	'ngInject';

	// Enable log
	logEnhancerProvider.logLevels = {
		'*': logEnhancerProvider.LEVEL[appConfig.logLevel]
	};

	// Setup http cache
	$httpProvider.defaults.cache = true;

	// Set options third-party lib
	toastrConfig.allowHtml = true;
	toastrConfig.timeOut = 3000;
	toastrConfig.positionClass = 'toast-top-right';
	toastrConfig.preventDuplicates = true;
	toastrConfig.progressBar = true;
}
