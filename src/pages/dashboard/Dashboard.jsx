import { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import NavBar from "../../components/navBar";
import Utilities from "../../components/Utilities";
import styles from "./Dashboard.module.css";
import { fetchTrendingMoviesWeekly } from "../../utils/fetchTrendingMoviesWeekly";
import HeroSlider from "../../components/HeroSlider";
import Star from "../../assets/Star";
import Card from "../../components/card/Card";

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
      <HeroSlider movies={weeklyTrendingMovies} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          padding: "1.25rem",
        }}
      >
        <h2>Trending This Week</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "1.25rem",
            maxWidth: "100%",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {weeklyTrendingMovies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
