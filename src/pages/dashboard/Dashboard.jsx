import { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import NavBar from "../../components/navBar";
import Utilities from "../../components/Utilities";
import styles from "./Dashboard.module.css";
import { fetchTrendingMoviesWeekly } from "../../utils/fetchTrendingMoviesWeekly";

function Dashboard() {
  const [weeklyTrendingMovies, setWeeklyTrendingMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchTrendingMoviesWeekly();
      setWeeklyTrendingMovies(data);
    }
    loadMovies();
  }, []);

  console.log(weeklyTrendingMovies);

  return (
    <main className={styles.dashboard}>
      <NavBar>
        <Logo />
        <Utilities />
      </NavBar>
      <div className={styles.trendingMovies}>
        {weeklyTrendingMovies.map((movie) => (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Dashboard;
