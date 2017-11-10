describe( 'File Writer', function() {
  var fs = require( 'fs' );
  var FileWriter,
   fileWriter,
   fileText = 'sure', 
    fileName = 'test.txt';

  beforeEach( function(){
     FileWriter = require( '../file-writer.js' );
     fileWriter = FileWriter();
     fileText = 'sure'; 
     fileName = 'test.txt';
    fs.unlink( fileName, function(){});
  });

  it( 'should write a string', function( done ){
    fileWriter.writeAString( fileText, fileName, function(){
      fs.readFile( fileName, function( err, data ){
        expect( data.toString() ).toEqual( fileText );
        done();
      });
    });
  });
  it( 'should error without required args', function(){
    expect( fileWriter.writeAString.bind( fileWriter, undefined, fileName, function(){} )).toThrow( 'missing text' );
    expect( fileWriter.writeAString.bind( fileWriter, fileText, undefined, function(){} )).toThrow( 'missing file path' );
    expect( fileWriter.writeAString.bind( fileWriter, fileText, fileName, undefined )).toThrow( 'missing callback' );
  });
});
