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

  return (
    <main className={styles.dashboard}>
      <NavBar>
        <Logo />
        <Utilities />
      </NavBar>

      <HeroSlider movies={weeklyTrendingMovies} />

      <TopRatedMovies movies={topRatedMovies} />

      <WeeklyTrendingMovies movies={weeklyTrendingMovies} />
    </main>
  );
}

export default Dashboard;
