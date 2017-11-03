module.exports = function(){
  var Backbone = require( 'backbone' );
  var MonopolyPlayer = Backbone.Model.extend({
    validate: function( attrs, opts ){
      if ( 
        !attrs.userName || 
        typeof attrs.userName !== 'string' || 
        attrs.userName.length < 2 
      ) { throw 'invalid userName'; }
    }
  });
  function extendSet( attrs, options ){
    var options = options || {};

    options.validate = true;
    try {
      return this.originalSet( attrs, options );
    } catch ( e ) {
      throw e;
    }
  }

  return function( options ) {
    var requiredFields = [ 'userName', 'boardMarker' ],
      options = options || {};

    requiredFields.forEach( function( each ){
      if ( !options[ each ] ) {
        throw 'missing ' + each;
      }
    });
    var myPlayer = new MonopolyPlayer( options );
    myPlayer.originalSet = myPlayer.set;
    myPlayer.set = extendSet;
    return myPlayer;
  };
};
