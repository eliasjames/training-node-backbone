// launch Node REPL
// from command prompt, type 'node' (no arguments)
// prompt changes to '>'
// load this file into a local variable:
//   'var helloWorld = require( './02-commonjs-exports' );'
// (note the path - leading dot, no suffix)
// execute the function returned:
//  'helloWorld(); // console.logs

module.exports = function() {
  console.log( 'hello world' );
}
