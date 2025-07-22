import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { useMovies } from "./hooks/useMovies";
import { MovieContext } from "./context/MovieContext";

function App() {
  const { movie, dispatch } = useMovies();

  return (
    <BrowserRouter>
      <MovieContext.Provider value={{ movie, dispatch }}>
        <Router />
      </MovieContext.Provider>
    </BrowserRouter>
  );
}

export default App;
