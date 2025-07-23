import { Route, Routes } from "react-router-dom";
import Home from "../pages/homepage/Home";
import Notifications from "../pages/notifications/Notifications";
import Search from "../pages/search/Search";
import Watchlist from "../pages/watchlist/Watchlist";
import NotFound from "../pages/notFound";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieDetails from "../pages/movie-details/MovieDetails";
import MoviesExplore from "../pages/movies-explore/MoviesExplore";

function Router() {
  const { movie } = useContext(MovieContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies-explore" element={<MoviesExplore />} />
      <Route path="/movies-explore/search" element={<Search />} />
      <Route path="/movies-explore/notifications" element={<Notifications />} />
      <Route path="/movies-explore/watchlist" element={<Watchlist />} />
      <Route
        path={`/movies-explore/movie/${movie?.id}`}
        element={<MovieDetails />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
