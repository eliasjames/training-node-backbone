// launch Node REPL
// from command prompt, type 'node' (no arguments)
// prompt changes to '>'
// load this file into a local variable:
//   'var setIntervalInstance = require( './05-set-interval' )();'
// (note the parentheses at the end - these execute the function)
// execute the function returned:
//  'setIntervalInstance.start(); // console.logs

module.exports = function() {
  let cancelTimeout,
    cancelInterval;

  return {
    start() {
      cancelTimeout = setTimeout( ()=>{
        console.log( 'timeout' );
      }, 1000 );
      cancelInterval = setInterval( ()=>{
        console.log( 'interval' );
      }, 250 );
    },
    stop() {
      clearInterval( cancelInterval );
    }
  };
}
