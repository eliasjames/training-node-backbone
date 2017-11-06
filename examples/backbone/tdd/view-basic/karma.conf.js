// Karma configuration
// Generated on Thu Nov 02 2017 19:47:42 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [ 'jasmine', 'requirejs' ],
    files: [
      './test-main.js',
      './model-validation/model.monopoly-player.js',
      './view.monopoly-player.js',
      './spec.monopoly-player.js',
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
