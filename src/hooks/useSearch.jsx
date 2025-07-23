import { useReducer } from "react";

const initialSearch = "";

function reducer(state, action) {
  switch (action.type) {
    case "SYNC_SEARCH_QUERY":
      return action.payload;
    default:
      throw new Error("Unknown action");
  }
}

export function useSearch() {
  const [search, searchDispatch] = useReducer(reducer, initialSearch);

  return { search, searchDispatch };
}
