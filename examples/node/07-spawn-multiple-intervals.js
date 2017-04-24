// launch Node REPL
// from command prompt, type 'node' (no arguments)
// prompt changes to '>'
// load this file into a local variable:
//   'var spawnMultiple = require( './07-spawn-multiple-intervals' )( { maxSpawns: 0 } );'
// (note the parameters at the end)
// execute the function returned:
//  'spawnMultiple.startMultiple(); // console.logs
// try running series and parallel
// IOW, wait until one start() has finished before starting another
// also try running multiple simulataneous

module.exports = function( options ) {
  const MAX_SPAWNS = options.maxSpawns;

  let cancelTimeout, 
    uid = 0,
    returnObject;

  returnObject = {
    start( uid ) {
      let cancelInterval;

      cancelTimeout = setTimeout( ()=>{
        console.log( 'timeout', uid );
        clearInterval( cancelInterval );
      }, 3000 );
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
