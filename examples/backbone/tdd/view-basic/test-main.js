'use strict';

var specFiles = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
console.log( 'file', file );
		if (/.*[/]*spec\..*\.js$/.test(file)) {
			specFiles.push(file);
		}
	}
}

require.config({
	deps: specFiles,
	callback: window.__karma__.start,
	paths: {
    backbone: 'node_modules/backbone/backbone.js'
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
