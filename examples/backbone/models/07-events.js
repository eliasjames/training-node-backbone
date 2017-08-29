const Ordered = Backbone.Model.extend({
  initialize() {
    // initialize is where to bind instance events
    this.on( 'change', ()=>{
      this.validate( this.attributes );
    });
    // in reality, probably want to validate here as well
    // omitting for example purposes
    // this.validate( this.attributes );
  },
  validate( attrs, options ) {
    console.log( 'validate ran' );
    if ( attrs.end < attrs.start ) {
      return "can't end before it starts";
    }
  }
});

let myModel = new Ordered({
	end: 20,
	start: 15
});
myModel.set( 'end', 10 );
//myModel.set( 'end', 20 );

window.addEventListener( 'DOMContentLoaded', ()=>{
  document.getElementById( 'message-area' ).append(
		`isValid: ${ myModel.isValid() };
		error text:  ${ myModel.validationError }`
	);
});
