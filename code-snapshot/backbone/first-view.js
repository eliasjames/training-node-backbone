var FirstView = Backbone.View.extend({
  events: {
    'input input.first-name': 'firstNameHandler',
    'click button.remove': function(){
      console.log( 'remove' );
      $( document ).trigger( 'remove-model', [ this.model.cid ]);
      this.$el.remove();
    }
  },
  firstNameHandler: function( event ) { 
    this.model.set( 'firstName', event.target.value );
  },
  initialize: function(){
    this.listenTo( this.model, 'change', this.render );
    this.render();
  },
  render: function(){
    var compiledTemplateFunc = _.template( this.template() );
    this.el.innerHTML = compiledTemplateFunc( this.model.attributes ); 
    var input = this.$el.find( 'input.first-name' );
    var inputLength = input.val().length;
    input.focus();
    input[0].setSelectionRange( inputLength, inputLength );
  },
  template: function(){
    return $( '#first-view-template' ).html();
  }
});
