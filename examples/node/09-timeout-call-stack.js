// launch Node REPL
// from command prompt, type 'node' (no arguments)
// prompt changes to '>'
// load this file into a local variable:
//   'var callStack = require( './09-timeout-call-stack' )({ 
//     maxSpawns: 20, timeoutMS: 1000, simulateDelay: 100
//   });'
// (note the parentheses at the end - these execute the function)
// execute the function returned:
//  'callStack.startMultiple(); // console.logs
//  uncomment fauxAsync and fauxMethod
//  experiment with different options

module.exports = function( options ) {
  const MAX_SPAWNS = options.maxSpawns,
    TIMEOUT_MS = options.timeoutMS,
    SIMULATE_DELAY = options.simulateDelay;

  let cancelTimeout, 
    uid = 0,
    returnObject;

  returnObject = {
    fauxAsync() {
      const START_TIME = Date.now();
      while ( START_TIME + SIMULATE_DELAY - Date.now() > 0 ) {
        // do nothing
      }
    },
    fauxMethod( uid ) {
      console.log( 'fauxMethod', uid );
    },
    start( uid ) {
      let cancelInterval;

      console.log( 'top of start', uid );

      cancelTimeout = setTimeout( ()=>{
        console.log( 'timeout', uid );
        clearInterval( cancelInterval );
      }, TIMEOUT_MS );

      //returnObject.fauxAsync( uid );
      //returnObject.fauxMethod( uid );

      cancelInterval = setInterval( ()=>{
        console.log( 'interval', uid );
      }, uid / 5 * 100 );

      console.log( 'bottom of start', uid );
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
