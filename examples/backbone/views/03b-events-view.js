const OrderedView = Backbone.View.extend({
  changeEnd( event ) {
    this.model.set( 'end', event.target.value );
  },
  changeStart( event ) {
    this.model.set( 'start', event.target.value  );
  },
  events: {
    'change .change-start': 'changeStart',
    'change .change-end': 'changeEnd'
  },
  initialize() {
    this.listenTo( this.model, 'change', this.render )
  },
  render() {
    let template = Handlebars.compile( $('#ordered-template').html())
    let renderedTemplate = template( this.model.attributes );
    this.$el.html( renderedTemplate );
  }
});

let myView = new OrderedView({ model: myModel });
$( document ).ready( ()=>{
  $( '#message-area' ).append( myView.el );
  myView.render();
});
