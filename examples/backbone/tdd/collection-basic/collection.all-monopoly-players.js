module.exports = function( playersArray ) {
  var Backbone = require( 'backbone' );
  var PlayerModel = require( '../model-validation/model.monopoly-player.js' );
  var PlayersCollection = Backbone.Collection.extend({
    model: PlayerModel()
  });
  var myCollection = new PlayersCollection( playersArray );
  return myCollection;
};
