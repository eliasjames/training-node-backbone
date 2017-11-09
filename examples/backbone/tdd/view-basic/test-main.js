'use strict';

var specFiles = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
    // console.log( 'file', file );
		if (/.*[/]*spec\..*\.js$/.test(file)) {
			specFiles.push(file);
		}
	}
}

require.config({
  baseUrl: '/base',
	deps: specFiles,
	callback: window.__karma__.start,
	paths: {
    'jquery': 'node_modules/jquery/dist/jquery',
    'underscore': 'node_modules/underscore/underscore',
    'backbone': 'node_modules/backbone/backbone',
    'model.monopoly-player': 'model-validation/model.monopoly-player',
    'view.monopoly-player': 'view.monopoly-player',
  },
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [ 'underscore', 'jquery' ],
			exports: 'Backbone'
		}
	}
});
