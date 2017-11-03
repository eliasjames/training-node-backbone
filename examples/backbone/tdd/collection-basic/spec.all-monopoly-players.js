describe( 'All Monopoly Players', function(){
  beforeEach( function(){
    var AllPlayers = require( './collection.all-monopoly-players.js' ),
      myPlayerOneOptions = {
        boardMarker: 'thimble',
        realNameFirst: 'Elias', 
        realNameLast: 'Carlston', 
        userName: 'Ace76'
      },
      myPlayerTwoOptions = {
        boardMarker: 'boot',
        realNameFirst: 'John', 
        realNameLast: 'Doe', 
        userName: 'MisterMonocle'
      },
      myAllPlayers = AllPlayers([ myPlayerOneOptions, myPlayerTwoOptions ]);
  });
  it( 'smoke test', function(){
    var Backbone = require( 'backbone' );
    var myCollection = new Backbone.Collection([
      { test: true }, 
      { test: false } 
    ]);
    expect( myCollection.where( { 'test': true } ).length ).toEqual( 1 );
  });
});
