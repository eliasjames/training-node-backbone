var FirstCollectionView = Backbone.View.extend({
  initialize: function(){
    $( document ).ready( function(){
      this.el.innerHTML = '<button class="add-model">Add</button>';
      this.render();
    }.bind( this ));
  },
  render: function(){
    this.$el.addClass( 'first-collection-' + this.collection.pseudoId );
    $( '.router-content' ).append( this.el );
    $( document ).trigger( 'first-collection-' + this.collection.pseudoId ); 
          this.$el.children( 'button.add-model' ).on( 'click', function(){
                    this.collection.add({});
                  }.bind( this ));
  }
});
