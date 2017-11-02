module.exports = function(){
  var Backbone = require( 'backbone' );
  var MonopolyPlayer = Backbone.Model.extend();

  return function( options ) {
    if ( !options.userName ) {
      throw ( 'missing userName' );
    }
    if ( !options.boardMarker ) {
      throw ( 'missing boardMarker' );
    }
    var myPlayer = new MonopolyPlayer( options );
    return myPlayer;
  };
};
