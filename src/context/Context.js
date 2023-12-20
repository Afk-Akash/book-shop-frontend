import React, { createContext, useReducer} from "react";
import reducer from "./Reducer";

const initialState = {
  books: [{"hello":"hello"}],
};

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //actions
  const fetchBooks = fetchedBooks => {
    dispatch({
      type: "FETCH_BOOKS",
      payload: fetchedBooks
    });
  };

  return (
    <Context.Provider
      value={{
        books: state.books,
        fetchBooks,
      }}
    >
      {children}
    </Context.Provider>
  );
};