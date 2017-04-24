const SimpleModel = Backbone.Model.extend({
  defaults: {
    lastname: 'Allen'
  },
  initialize() {
    if ( !this.get( 'name' ) ) {
      this.set( 'name', 'Gracie' );
    }
  },
  sayHello() {
    return `Hello ${ this.get( 'name' ) }`;
  }
});

let gracieModel = new SimpleModel();
let paulModel = new SimpleModel({
  name: 'Paul'
});

window.addEventListener( 'DOMContentLoaded', ()=>{
  document.getElementById( 'message-area' ).append( ' ' + paulModel.sayHello());
});
