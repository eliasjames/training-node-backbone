// Karma configuration
// Generated on Thu Nov 02 2017 19:47:42 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [ 'jasmine', 'requirejs' ],
    files: [
      { pattern: './node_modules/jquery/dist/jquery.js', included: false },
      { pattern: './node_modules/underscore/underscore.js', included: false },
      { pattern: './node_modules/backbone/backbone.js', included: false },
      { pattern: './first-view.js', included: false },
      { pattern: './spec.first-view.js', included: false },
      { pattern: './model-validation/model.monopoly-player.js', included: false },
      { pattern: './view.monopoly-player.js', included: false },
      { pattern: './spec.monopoly-player.js', included: false },
      './test-main.js',
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
