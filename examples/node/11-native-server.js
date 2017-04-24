// launch Node REPL
// from command prompt, type 'node' (no arguments)
// prompt changes to '>'
// load this file into a local variable:
//   var useFileSystem = require( './10-file-system' )();

module.exports = function( options ) {
  const FS = require( 'fs' );

  returnObject = {
    showFS() {
      return FS;
    },
		startServer() {
			let http = require("http");

			let server = http.createServer( ( req, res )=>{
				res.writeHead( 200, {"Content-Type": "text/html"} );
				let index = FS.readFileSync( './index.html', 'utf8' );
				res.write( index );
				res.end();
			});

			server.listen( 8000 );
			console.log("Server is listening");
		}
  };

  return returnObject;
}
