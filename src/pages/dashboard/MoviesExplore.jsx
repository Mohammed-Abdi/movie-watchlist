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

function MoviesExplore() {
  const [mediaData, setMediaData] = useState({
    weeklyTrendingMovies: [],
    topRatedMovies: [],
    popularMovies: [],
    topRatedTvShows: [],
  });

  useEffect(() => {
    async function loadAllMediaData() {
      try {
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
      }
    }

    loadAllMediaData();
  }, []);

  return (
    <main className={styles.MoviesExplore}>
      <NavBar>
        <Logo />
        <Utilities />
      </NavBar>

      <HeroSlider movies={mediaData.weeklyTrendingMovies} />

      <TopRatedMovies movies={mediaData.topRatedMovies} />

      <TopRatedTvShows movies={mediaData.topRatedTvShows} />

      <WeeklyTrendingMovies movies={mediaData.weeklyTrendingMovies} />

      <PopularMovies movies={mediaData.popularMovies} />

      <Footer>&copy; 2025. Mohammed Abdi. All rights reserved</Footer>
    </main>
  );
}

export default MoviesExplore;
