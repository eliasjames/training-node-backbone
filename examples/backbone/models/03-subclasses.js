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
const FullNameModel = SimpleModel.extend({
  sayHello() {
    return `Hello ${ this.get( 'name' ) } ${ this.get( 'lastname' ) }`;
  }
});

let myModel = new FullNameModel({
  name: 'Mud',
  lastname: 'Bond'
});

window.addEventListener( 'DOMContentLoaded', ()=>{
  document.getElementById( 'message-area' ).append( ' ' + myModel.sayHello());
});
