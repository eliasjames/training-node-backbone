describe( 'First Model', function(){
  it( 'smoke test', function(){
    var Backbone = require( 'backbone' );
    var myModel = new Backbone.Model( { test: true } );
    expect( myModel.get( 'test' )).toEqual( true );
  });
});
