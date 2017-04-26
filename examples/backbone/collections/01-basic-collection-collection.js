let chatMessageCollection = new Backbone.Collection();
chatMessageCollection.on( 'add', ( addedModel )=>{
  new ChatMessageView({ model: addedModel });
});
