var FirstCollectionView = Backbone.View.extend({
  events: {
    'click .add-model': function(){ 
      this.collection.add({}); 
    }
  },
  initialize: function(){
    $( document ).ready( function(){
      this.$el.addClass( 'first-collection-' + this.collection.pseudoId );
      this.$el.append( '<button class="add-model">Add</button>' );
      $( 'body' ).append( this.el )
      $( document ).trigger( 'first-collection-' + this.collection.pseudoId ); 
    }.bind( this ));
  }
});
