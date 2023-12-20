export default (state, action) => {
    const { books } = state;
  
    switch (action.type) {
      case "FETCH_BOOKS":
        console.log('@@@fetchbooks called');
          return {
            ...state,
            books: [...books,...action.payload]
          };
  
      default:
        return state;
    }
  };