import uuid from 'uuid';



export default (state = [], action) => {
  console.log('reducer', action.quoteId);
  switch (action.type) {
    case 'ADD_QUOTE':
      const id = uuid();
      action.quote.id = id
      action.quote.votes = 0
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      const newState = state.filter(s => s.id !== action.quoteId)
      return newState
    case 'UPVOTE_QUOTE':
      console.log('Upvote State', state);
      const quote = state.find(q => q.id === action.quoteId)
      quote.votes += 1
      console.log('Quote', quote);
      return [...state]
    case 'DOWNVOTE_QUOTE':
      console.log('Downvote State', state);
      const quote2 = state.find(q => q.id === action.quoteId)
      if (quote2.votes > 0) {
        quote2.votes -= 1
      }
      console.log('Quote', quote2);
      return [...state]
    default:
      return state;

  }
}
// author: action.quote.author,
// content: action.quote.content
