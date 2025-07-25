import { useEffect, useReducer } from "react";

const initialState = null;

function reducer(state, action) {
  switch (action.type) {
    case "SET_CURRENT_MOVIE":
      return action.payload;
    default:
      throw new Error("Unknown action");
  }
}

export function useMovies() {
  const [movie, dispatch] = useReducer(reducer, initialState, () => {
    const selectedMovie = localStorage.getItem("movie");
    return selectedMovie ? JSON.parse(selectedMovie) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(movie));
  }, [movie]);

  return { movie, dispatch };
}
