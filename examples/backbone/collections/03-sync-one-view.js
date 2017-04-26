const ChatMessageView = Backbone.View.extend({
  initialize() {
    this.listenTo( this.model, 'change', this.render )
  },
  render() {
    let template = Handlebars.compile( $('#chat-message-template').html())
    let renderedTemplate = template( this.model.attributes );
    this.el = renderedTemplate;
  }
});
