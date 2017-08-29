const OrderedModel = Backbone.Model.extend({
  defaults: {
    parent: '#message-area'
  },
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
    if ( attrs.end < attrs.start ) {
      return "can't end before it starts";
    }
  }
});

let myModel = new OrderedModel({
	end: 20,
	start: 15
});
// this one doesnt print because message-area isnt available
myModel.set( 'end', 10 );
let anotherModel = new OrderedModel({
  end: 1000,
  start: 0
});
let thirdModel = new OrderedModel({
  parent: 'body',
  end: 1000,
  start: 0
});

window.addEventListener( 'DOMContentLoaded', ()=>{
  myModel.set( 'end', 20 );
});
