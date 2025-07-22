import { useContext, useEffect, useState } from "react";
import styles from "./Movie.module.css";
import { MovieContext } from "../../context/MovieContext";
import Calendar from "../../assets/Calendar";
import Star from "../../assets/Star";
import ActionButton from "../../components/ActionButton";
import Footer from "../../components/Footer";
import { fetchTvGenres } from "../../utils/fetchTvGenres";

function Movie() {
  const [tvGenres, setTvGenres] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    async function loadGenres() {
      const tv = await fetchTvGenres();
      const movie = await fetchMovieGenre;
      setTvGenres(data);
    }
    loadGenres();
  }, []);

  const { movie } = useContext(MovieContext);
  console.log(movie);
  return (
    <main className={styles.Movie}>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={`${
            movie?.title ? movie?.title : movie.original_name
          } backdrop poster`}
          style={{ height: "40vh", objectFit: "cover", width: "100%" }}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.main}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie?.title ? movie?.title : movie.original_name} poster`}
            className={styles.poster}
          />
          <ActionButton
            style={{
              padding: "0.75rem 3rem",
              fontSize: "1rem",
              maxWidth: "fit-content",
              borderRadius: "0.5rem",
            }}
          >
            Add to Watchlist
          </ActionButton>
        </div>
        <div className={styles.details}>
          <h1>{movie?.title ? movie?.title : movie.original_name}</h1>

          <div className={styles.quickInfo}>
            <div className={styles.movieBadge}>
              {movie.isTvShow ? "Tv Show" : "Movie"}
            </div>

            <div className={styles.yearBadge}>
              <Calendar />
              {movie?.release_date
                ? movie?.release_date?.split("-").at(0)
                : movie?.first_air_date?.split("-").at(0)}
            </div>

            <div className={styles.rating}>
              <Star style={{ color: "#E7BF36" }} />
              {movie?.vote_average.toFixed(1)}
            </div>

            <p style={{ fontSize: "0.875rem", fontWeight: 500 }}>
              {movie?.adult ? "18+" : "PG-13"}
            </p>
          </div>
          <p style={{ maxWidth: "50rem", opacity: 0.7 }}>{movie.overview}</p>
        </div>
      </div>
      <Footer>&copy; 2025. Mohammed Abdi. All rights reserved</Footer>
    </main>
  );
}

export default Movie;
