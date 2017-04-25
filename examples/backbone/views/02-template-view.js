const OrderedView = Backbone.View.extend({
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
