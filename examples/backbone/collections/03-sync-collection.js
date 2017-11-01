const ChatMessageCollection = Backbone.Collection.extend({
  model: ChatMessageModel,
  url: '/sync'
});
let chatMessageCollection = new ChatMessageCollection();
// chatMessageCollection.fetch();
