const ChatMessageModel = Backbone.Model.extend({
  initialize() {
    this.on( 'change', ()=>{
      this.validate( this.attributes );
    });
  },
  validate( attrs, options ) {
    if ( !attrs.user ) {
      return 'must have a user name';
    }
  }
});
