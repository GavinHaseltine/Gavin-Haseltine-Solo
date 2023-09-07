const winnerDeckReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_DECK_WINNER':
        return action.payload;
      case 'UNSET_DECK_WINNER':
        return [];
      default:
        return state;
    }
  };
  export default winnerDeckReducer;