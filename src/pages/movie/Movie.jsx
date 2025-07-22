import { useContext } from "react";
import styles from "./Movie.module.css";
import { MovieContext } from "../../context/MovieContext";

function Movie() {
  const { movie } = useContext(MovieContext);
  return (
    <main className={styles.Movie}>
      <h1>{movie.title}</h1>
    </main>
  );
}

export default Movie;
