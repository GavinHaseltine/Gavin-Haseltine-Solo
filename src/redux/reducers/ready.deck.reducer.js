const readyDeckReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_READY_DECK':
        return [...action.payload];
      case 'UNSET_READY_PLAYERS':
        return []; 
      default:
        return state;
    }
  };
  export default readyDeckReducer;