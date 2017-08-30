let AboutView = Backbone.View.extend({
  render(){
    $( '.chat-messages' ).html( '' );  
    $( '.chat-messages' ).html( '<h1>about</h1>' );  
  }
});

let aboutView = new AboutView();
