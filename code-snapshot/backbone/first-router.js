var FirstRouter = Backbone.Router.extend({
  routes: {
    'static': 'myStatic',
    'filter/:filterValue': 'myFilter'
  },
  myStatic: function(){
    console.log( 'static' );
    myStatic.render();
    $( '.router-content' ).html( myStatic.el );
  },
  myFilter: function( filterValue ){
    console.log( 'filter', filterValue );
    $( '.router-content' ).html( '' );
    myFirstCollectionView.render();
    anotherCollectionView.render();
  },
});

$( document ).ready( function(){
  var myRouter = new FirstRouter();
  Backbone.history.start();
});
