import { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import NavBar from "../../components/navBar";
import Utilities from "../../components/Utilities";
import styles from "./Dashboard.module.css";
import { fetchTrendingMoviesWeekly } from "../../utils/fetchTrendingMoviesWeekly";
import HeroSlider from "../../components/HeroSlider";
import WeeklyTrendingMovies from "../../components/WeeklyTrendingMovies";
import { fetchTopRatedMovies } from "../../utils/fetchTopRatedMovies";
import TopRatedMovies from "../../components/TopRatedMovies";
import { fetchPopularMovies } from "../../utils/fetchPopularMovies";
import PopularMovies from "../../components/PopularMovies";
import { fetchTopRatedTvShows } from "../../utils/fetchTopRatedTvShows";
import TopRatedTvShows from "../../components/TopRatedTvShows";

function Dashboard() {
  const [weeklyTrendingMovies, setWeeklyTrendingMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchTrendingMoviesWeekly();
      setWeeklyTrendingMovies(data);
    }
    loadMovies();
  }, []);

  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchTopRatedMovies();
      setTopRatedMovies(data);
    }
    loadMovies();
  }, []);

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchPopularMovies();
      setPopularMovies(data);
    }
    loadMovies();
  }, []);

  const [topRatedTvShows, setTopRatedTvShows] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchTopRatedTvShows();
      setTopRatedTvShows(data);
    }
    loadMovies();
  }, []);

  console.log(topRatedTvShows);

  return (
    <main className={styles.dashboard}>
      <NavBar>
        <Logo />
        <Utilities />
      </NavBar>

      <HeroSlider movies={weeklyTrendingMovies} />

      <TopRatedMovies movies={topRatedMovies} />

      <WeeklyTrendingMovies movies={weeklyTrendingMovies} />

      <PopularMovies movies={popularMovies} />

      <TopRatedTvShows movies={topRatedTvShows} />
    </main>
  );
}

export default Dashboard;
