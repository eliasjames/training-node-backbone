const ChatMessageCollectionView = Backbone.View.extend({
  initialize() {
    $( document ).ready( ()=>{
      this.render();
      $( '.chat-messages' ).append( this.el );
    });
  },
  tagname: 'ul',
  render() {
    this.collection.each( ( eachMsg )=>{
      let myCMV = new ChatMessageView({ model: eachMsg });
      myCMV.render();
      this.$el.append( myCMV.el );
    });
  }
});
