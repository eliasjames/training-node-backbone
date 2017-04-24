const Ordered = Backbone.Model.extend({
  initialize() {
    // initialize is where to bind instance events
    this.on( 'change', ()=>{
      this.validate( this.attributes );
      this.writeToPage();
    });
    // in reality, probably want to validate here as well
    // omitting for example purposes
    // this.validate( this.attributes );
  },
  validate( attrs, options ) {
    if ( attrs.end < attrs.start ) {
      return "can't end before it starts";
    }
  },
  writeToPage() {
    let msg = document.getElementById( 'message-area' );
    if ( msg ) {
      let p = document.createElement( 'p' );
      p.append( document.createTextNode(
          `start: ${ myModel.get( 'start' ) };
          end:  ${ myModel.get( 'end' ) }`
        )
      );
      msg.append( p );
    } else {
      console.log( 'no message area' );
    }
  }
});

let myModel = new Ordered({
	end: 20,
	start: 15
});
// this one doesnt print because message-area isnt available
myModel.set( 'end', 10 );

window.addEventListener( 'DOMContentLoaded', ()=>{
  myModel.set( 'end', 20 );
  myModel.writeToPage();
});
