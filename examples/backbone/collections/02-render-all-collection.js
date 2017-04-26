const ChatMessageCollection = Backbone.Collection.extend({
  model: ChatMessageModel
});
let chatMessageCollection = new ChatMessageCollection();
