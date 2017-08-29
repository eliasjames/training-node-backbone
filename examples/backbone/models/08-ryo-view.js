const Ordered = Backbone.Model.extend({
  initialize() {
    // initialize is where to bind instance events
    this.p = document.createElement( 'p' );
    this.on( 'change', ()=>{
      this.validate( this.attributes );
      if ( this.msg ) {
        this.writeToPage();
      }
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
    let textnode = document.createTextNode(
      `first: ${ myModel.get( 'start' ) };
      last:  ${ myModel.get( 'end' ) }
      valid:  ${ myModel.isValid() }`
    );
    //console.log( 'textnode', textnode );
    this.p.innerHTML = textnode.nodeValue;
    this.msg.innerHTML = myModel.p.innerHTML;
  }
});

let myModel = new Ordered({
	end: 20,
	start: 15
});
// this one doesnt print because message-area isnt available
myModel.set( 'end', 10 );

window.addEventListener( 'DOMContentLoaded', ()=>{
  let msg = document.getElementById( 'message-area' );
  if ( msg ) {
    myModel.msg = msg;
    myModel.writeToPage();
  }
});
