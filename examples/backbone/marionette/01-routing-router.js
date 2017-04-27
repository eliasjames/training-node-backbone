var ChatRouter = Backbone.Router.extend({
  about(){
    console.log( 'about' );
  },
  chat( genre ) {
    console.log( 'genre', genre );
  },
  routes: {
    'about': 'about',
    'chat/:genre': 'chat'
  }
});
$( document ).ready( ()=>{
  new ChatRouter();
  Backbone.history.start();
});
