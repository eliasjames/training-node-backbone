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
    readChat( subject ) {
      FS.readFile( subject, 'utf8', ( err, data )=>{
        console.log( 'readed', err, data );
      });
    },
    writeChat( subject, content ) {
      FS.writeFile( subject, content, ()=>{
        console.log( 'written' );
      });
    },
    writeChatSubDir( subject, content ) {
      FS.mkdir( 'chats', ( err )=>{
        if ( !err ) {
          FS.writeFile( subject, content, ()=>{
            console.log( 'written' );
          });
        }
      });
    }

  };

  return returnObject;
}
