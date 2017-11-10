var FirstCollection = Backbone.Collection.extend({
  initialize: function() {
    this.pseudoId = Date.now();
    
    this.on( 'add', function( model ){
      var myView =  new FirstView({ model: model });
      if ( $( '.first-collection-' + this.pseudoId ).length === 0 ) {
        $( document ).on( 'first-collection-' + this.pseudoId, function(){
          $( '.first-collection-' + this.pseudoId ).append( myView.el ); 
        }.bind( this ));
        return;
      }
      $( '.first-collection-' + this.pseudoId ).append( myView.el ); 
    });

    $( document ).on( 'remove-model', function( event, cid ){
      this.remove( cid );
    }.bind( this ));
  },
  model: FirstModel
});

