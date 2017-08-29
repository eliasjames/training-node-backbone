const ChatMessageCollectionView = Backbone.View.extend({
//  events: {
//    'click .add-to-collection': 'addToCollection'
//  },
  addToCollection() {
    this.collection.add({ user: 'Drew', message: 'Yaya!' });
  },
  initialize() {
    this.listenTo( this.collection, 'all', this.render );

    $( document ).ready( ()=>{
      this.render();
      $( '.chat-messages' ).append( this.el );
      $( '.add-to-collection' ).on( 'click', ()=>{
        this.addToCollection();    
      });
    });

  },
  tagname: 'ul',
  render() {
    this.$el.html( '<button class="add-to-collection">Add</button>' );
    this.collection.each( ( eachMsg )=>{
      let myCMV = new ChatMessageView({ model: eachMsg });
      myCMV.render();
      this.$el.append( myCMV.el );
    });
  }
});
