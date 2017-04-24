// launch Node REPL
// from command prompt, type 'node' (no arguments)
// prompt changes to '>'
// load this file into a local variable:
//   'var setIandTInstance = require( './06-interval-and-timeout' )();'
// (note the parentheses at the end - these execute the function)
// execute the function returned:
//  'setIandTInstance.start(); // console.logs
// try running series and parallel
// IOW, wait until one start() has finished before starting another
// also try running multiple simulataneous

module.exports = function() {
  let cancelTimeout;

  return {
    start() {
      let cancelInterval;
      cancelTimeout = setTimeout( ()=>{
        console.log( 'timeout' );
        clearInterval( cancelInterval );
      }, 3000 );
      cancelInterval = setInterval( ()=>{
        console.log( 'interval' );
      }, 250 );
    },
    stop( cancelInterval ) {
      clearInterval( cancelInterval );
    }
  };
}
