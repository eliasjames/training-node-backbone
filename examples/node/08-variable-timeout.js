// launch Node REPL
// from command prompt, type 'node' (no arguments)
// prompt changes to '>'
// load this file into a local variable:
//   'var variableTimeout = require( './08-variable-timeout' )({
//     maxSpawns: 20000, timeoutMS: 1000
//   });'
// (note the parameters at the end)
// execute the function returned:
//  'variableTimeout.startMultiple(); // console.logs

module.exports = function( options ) {
  const MAX_SPAWNS = options.maxSpawns,
    TIMEOUT_MS = options.timeoutMS;

  let cancelTimeout, 
    uid = 0,
    returnObject;

  returnObject = {
    start( uid ) {
      let cancelInterval;

      cancelTimeout = setTimeout( ()=>{
        console.log( 'timeout', uid );
        clearInterval( cancelInterval );
      }, TIMEOUT_MS );
      cancelInterval = setInterval( ()=>{
        console.log( 'interval', uid );
      }, uid / 5 * 100 );
    },
    startMultiple() {
      for ( let i=0; i < MAX_SPAWNS; i++ ) {
        uid++;
        returnObject.start( uid );
      }
    },
    stop( cancelInterval ) {
      clearInterval( cancelInterval );
    }
  };

  return returnObject;
}
