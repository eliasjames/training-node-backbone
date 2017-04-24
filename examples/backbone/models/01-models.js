const SimpleModel = Backbone.Model.extend({
  sayHello() {
    return "Hello, Gracie";
  }
});

let myModel = new SimpleModel;

window.addEventListener( 'DOMContentLoaded', ()=>{
  document.getElementById( 'message-area' ).append( ' ' + myModel.sayHello());
});
