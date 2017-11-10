module.exports = function(){
  var fs = require( 'fs' );
  var config = require( './file-writer-config' );

  return {
    writeAString: function( text, filePath, callback ){
      if ( !text ) {
        throw config.fileArgs.text;
      }
      if ( !filePath ) {
        throw config.fileArgs.filePath;
      }
      if ( !callback ) {
        throw config.fileArgs.callback;
      }
      fs.writeFile( filePath, text, function(){
        callback(); 
      });
    }
  };
};
