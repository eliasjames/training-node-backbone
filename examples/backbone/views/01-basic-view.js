const OrderedView = Backbone.View.extend({
  tagName: 'li',
  initialize() {
    this.listenTo( this.model, 'change', this.render )
  },
  render() {
    this.$el.html( 'myView: ' + this.model.get( 'end' ) );
  }
});

let myView = new OrderedView({ model: myModel });
$( document ).ready( ()=>{
  $( '#message-area' ).append( myView.el );
  myView.render();
});
