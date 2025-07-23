import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { useMovies } from "./hooks/useMovies";
import { MovieContext } from "./context/MovieContext";
import { useSearch } from "./hooks/useSearch";
import { SearchContext } from "./context/SearchContext";
import { UserContext } from "./context/UserContext";
import { useUserState } from "./hooks/useUserState";

function App() {
  const { movie, dispatch } = useMovies();
  const { search, searchDispatch } = useSearch();
  const { user, userDispatch } = useUserState();

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, userDispatch }}>
        <SearchContext.Provider value={{ search, searchDispatch }}>
          <MovieContext.Provider value={{ movie, dispatch }}>
            <Router />
          </MovieContext.Provider>
        </SearchContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
