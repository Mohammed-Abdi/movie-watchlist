import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { useMovies } from "./hooks/useMovies";
import { MovieContext } from "./context/MovieContext";
import { useSearch } from "./hooks/useSearch";
import { SearchContext } from "./context/SearchContext";

function App() {
  const { movie, dispatch } = useMovies();
  const { search, searchDispatch } = useSearch();

  return (
    <BrowserRouter>
      <SearchContext.Provider value={{ search, searchDispatch }}>
        <MovieContext.Provider value={{ movie, dispatch }}>
          <Router />
        </MovieContext.Provider>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
