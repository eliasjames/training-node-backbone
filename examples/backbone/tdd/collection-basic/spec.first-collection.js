describe( 'First Collection', function(){
  it( 'smoke test', function(){
    var Backbone = require( 'backbone' );
    var myCollection = new Backbone.Collection( [
      { test: true }, 
      { test: false } 
    ]);
    expect( myCollection.where( { 'test': true } ).length ).toEqual( 1 );
  });
});
