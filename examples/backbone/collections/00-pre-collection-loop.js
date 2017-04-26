const myMessages = [
  { user: 'Elias', message: 'Hey hows it going' },
  { user: 'Mud', message: 'Good, you?' },
  { user: 'Elias', message: 'Good amigo!' },
  { user: 'Elias', message: 'I love chatting!' },
  { user: 'Mud', message: 'Yes, it is the best' }
];

myMessages.forEach( ( eachMsg )=>{
  let thisView = new ChatMessageView({ 
    model: new ChatMessageModel( eachMsg )
  });
});
