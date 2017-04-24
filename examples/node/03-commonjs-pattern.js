// launch Node REPL
// from command prompt, type 'node' (no arguments)
// prompt changes to '>'
// load this file into a local variable:
//   'var helloWorldInstance = require( './03-commonjs-pattern' )();'
// (note the parentheses at the end - these execute the function)
// execute the function returned:
//  'helloWorldInstance.sayHello(); // console.logs

module.exports = function() {
  return {
    sayHello() {
      console.log( 'hello world' );
    },
    keepTalking() {
      console.log( 'hello again' );
    }
  };
}
