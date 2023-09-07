const winnerPlayerReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_WINNER':
        return action.payload;
      case 'UNSET_WINNER':
        return [];
      default:
        return state;
    }
  };
  export default winnerPlayerReducer;