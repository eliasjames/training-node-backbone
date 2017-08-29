const OrderedView = Backbone.View.extend({
  tagName: 'li',
  initialize() {
    this.listenTo( this.model, 'change', this.render )
    $( document ).ready( ()=>{
      $( this.model.get( 'parent' ) ).append( this.el )
      this.render();
    });
  },
  render() {
    this.$el.html( 'myView: ' + this.model.get( 'end' ) );
  }
});

let myView = new OrderedView({ model: myModel });
let anotherView = new OrderedView({ model: anotherModel });

let thirdView = new OrderedView({ 
  model: thirdModel, 
  parent: 'body'
});
