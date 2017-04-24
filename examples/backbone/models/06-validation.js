const Ordered = Backbone.Model.extend({
  validate( attrs, options ) {
    if ( attrs.end < attrs.start ) {
      return "can't end before it starts";
    }
  }
});

let myModel = new Ordered({
	end: 10,
	start: 15
});

window.addEventListener( 'DOMContentLoaded', ()=>{
  document.getElementById( 'message-area' ).append(
		`isValid: ${ myModel.isValid() };
		error text:  ${ myModel.validationError }`
	);
});
