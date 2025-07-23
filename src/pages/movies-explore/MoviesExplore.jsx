import { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import NavBar from "../../components/NavBar";
import Utilities from "../../components/Utilities";
import styles from "./MoviesExplore.module.css";
import { fetchTrendingMoviesWeekly } from "../../utils/fetchTrendingMoviesWeekly";
import HeroSlider from "../../components/HeroSlider";
import WeeklyTrendingMovies from "../../components/WeeklyTrendingMovies";
import { fetchTopRatedMovies } from "../../utils/fetchTopRatedMovies";
import TopRatedMovies from "../../components/TopRatedMovies";
import { fetchPopularMovies } from "../../utils/fetchPopularMovies";
import PopularMovies from "../../components/PopularMovies";
import { fetchTopRatedTvShows } from "../../utils/fetchTopRatedTvShows";
import TopRatedTvShows from "../../components/TopRatedTvShows";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function MoviesExplore() {
  const [mediaData, setMediaData] = useState({
    weeklyTrendingMovies: [],
    topRatedMovies: [],
    popularMovies: [],
    topRatedTvShows: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    function handleShortcut(e) {
      e.preventDefault();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        navigate("search");
      }
    }

    document.addEventListener("keydown", handleShortcut);

    return () => document.removeEventListener("keydown", handleShortcut);
  }, [navigate]);

  useEffect(() => {
    async function loadAllMediaData() {
      try {
        setIsLoading(true);
        const [trending, topRated, popular, topRatedTV] = await Promise.all([
          fetchTrendingMoviesWeekly(),
          fetchTopRatedMovies(),
          fetchPopularMovies(),
          fetchTopRatedTvShows(),
        ]);

        setMediaData({
          weeklyTrendingMovies: trending,
          topRatedMovies: topRated,
          popularMovies: popular,
          topRatedTvShows: topRatedTV,
        });
      } catch (err) {
        console.error("Failed to fetch media data", err);
        setError(
          "Oops! It looks like you're offline. Please check your internet connection and try again."
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadAllMediaData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.MoviesExplore}>
      <NavBar>
        <Logo />
        <Utilities />
      </NavBar>

      <HeroSlider
        movies={mediaData.weeklyTrendingMovies}
        isLoading={isLoading}
        error={error}
      />

      <TopRatedMovies
        movies={mediaData.topRatedMovies}
        isLoading={isLoading}
        error={error}
      />

      <TopRatedTvShows
        movies={mediaData.topRatedTvShows}
        isLoading={isLoading}
        error={error}
      />

      <WeeklyTrendingMovies
        movies={mediaData.weeklyTrendingMovies}
        isLoading={isLoading}
        error={error}
      />

      <PopularMovies
        movies={mediaData.popularMovies}
        isLoading={isLoading}
        error={error}
      />

      <Footer>&copy; 2025. Mohammed Abdi. All rights reserved</Footer>
    </main>
  );
}

export default MoviesExplore;
