const ChatMessageCollectionView = Backbone.View.extend({
  doFetch() {
    this.collection.fetch();
  },
  events: {
    'click .fetch': 'doFetch'
  },
  insertDom() {
    $( '.chat-messages' ).html('');
    $( '.chat-messages' ).append( this.el );
    this.render();
  },
  initialize() {
    this.listenTo( this.collection, 'all', ()=> {
      this.insertDom();
    });
    $( document ).ready( ()=>{
      this.insertDom();
    });
  },
  tagname: 'ul',
  render() {
    this.$el.html( '<button class="fetch">Fetch</button>' );
    this.collection.each( ( eachMsg )=>{
      let myCMV = new ChatMessageView({ model: eachMsg });
      myCMV.render();
      this.$el.append( myCMV.el );
    });
  }
});
