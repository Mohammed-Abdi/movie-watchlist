import { Route, Routes } from "react-router-dom";
import Home from "../pages/homepage/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Notifications from "../pages/notifications/Notifications";
import Search from "../pages/search/Search";
import Watchlist from "../pages/watchlist/Watchlist";
import NotFound from "../pages/notFound";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieDetails from "../pages/movie-details/MovieDetails";

function Router() {
  const { movie } = useContext(MovieContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/search" element={<Search />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route
        path={`/dashboard/movie/${movie?.id}`}
        element={<MovieDetails />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
