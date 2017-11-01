var ChatRouter = Backbone.Router.extend({
  about(){
    console.log( 'about' );
    aboutView.render();
  },
  chat( user ) {
    console.log( 'user', user );
    chatMessageCollectionView.filterByUser( user );
  },
  routes: {
    'about': 'about',
    'chat/:user': 'chat'
  }
});
$( document ).ready( ()=>{
  new ChatRouter();
  Backbone.history.start();
});
