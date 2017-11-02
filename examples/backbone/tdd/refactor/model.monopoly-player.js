module.exports = function(){
  var Backbone = require( 'backbone' );
  var MonopolyPlayer = Backbone.Model.extend();

  return function( options ) {
    var requiredFields = [ 'userName', 'boardMarker' ];
    requiredFields.forEach( function( each ){
      if ( !options[ each ] ) {
        throw 'missing ' + each;
      }
    });
    var myPlayer = new MonopolyPlayer( options );
    return myPlayer;
  };
};
