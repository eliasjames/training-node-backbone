// launch Node REPL
// from command prompt, type 'node' (no arguments)
// prompt changes to '>'
// load this file into a local variable:
//   'var setTimeoutInstance = require( './04-set-timeout' )();'
// (note the parentheses at the end - these execute the function)
// execute the function returned:
//  'setTimeoutInstance.start(); // console.logs

module.exports = function() {
  let cancelTimeout;

  return {
    start() {
      cancelTimeout = setTimeout( ()=>{
        console.log( 'timeout' );
      }, 3000);
    },
    stop() {
      clearTimeout( cancelTimeout );
    }
  };
}
