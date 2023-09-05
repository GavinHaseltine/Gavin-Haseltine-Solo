const deckReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_DECKS':
        return action.payload;
      case 'UNSET_DECKS':
        return [];
      default:
        return state;
    }
  };
  export default deckReducer;