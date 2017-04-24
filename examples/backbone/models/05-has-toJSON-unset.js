const SimpleModel = Backbone.Model.extend();

let myModel = new SimpleModel({ 
  name: 'Slim Shady',
  real: false
});
console.log( 'name:', myModel.get( 'name' ));

myModel.set( 'name', undefined );
console.log( 'has name after set:',  myModel.has( 'name' ));

console.log( 
  'json:', JSON.stringify( myModel.toJSON() )
);
console.log( 'attributes:', myModel.attributes );
console.log( 'hasOwnProperty name:', myModel.attributes.hasOwnProperty( 'name' ) );

myModel.unset( 'name' );
console.log( 'hasOwnProperty after unset:', myModel.attributes.hasOwnProperty( 'name' ) );

window.addEventListener( 'DOMContentLoaded', ()=>{
  document.getElementById( 'message-area' ).append( ' see console' );
});
