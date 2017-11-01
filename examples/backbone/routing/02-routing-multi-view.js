const ChatMessageCollectionView = Backbone.View.extend({
  doFetch() {
    this.collection.fetch();
  },
  events: {
    'click .fetch': 'doFetch'
  },
  filterByUser( user ) {
    this.displayCollection = new ChatMessageCollection( this.collection.where( { user: user } ));
    this.insertDom();
  },
  insertDom() {
    $( '.chat-messages' ).html('');
    $( '.chat-messages' ).append( this.el );
    this.render();
  },
  initialize() {
    this.listenTo( this.collection, 'update', ()=> {
      this.insertDom();
    });
//    $( document ).ready( ()=>{
//      this.insertDom();
//    });
  },
  tagname: 'ul',
  render() {
    this.$el.html( '<button class="fetch">Fetch</button>' );

    if ( !this.displayCollection ) {
      this.displayCollection = this.collection;
    }
    this.displayCollection.each( ( eachMsg )=>{
      let myCMV = new ChatMessageView({ model: eachMsg });
      myCMV.render();
      this.$el.append( myCMV.el );
    });
  }
});
