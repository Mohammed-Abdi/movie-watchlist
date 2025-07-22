import { useContext, useEffect, useState } from "react";
import styles from "./MovieDetails.module.css";

import { MovieContext } from "../../context/MovieContext";

import CalendarIcon from "../../assets/Calendar";
import StarIcon from "../../assets/Star";
import BackIcon from "../../assets/Back";

import ActionButton from "../../components/ActionButton";
import NavBar from "../../components/NavBar";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import LoadingAnimation from "../../assets/LoadingAnimation";

import { fetchTvGenres } from "../../utils/fetchTvGenres";
import { fetchMovieGenres } from "../../utils/fetchMovieGenres";

import { Link } from "react-router-dom";

function MovieDetails() {
  const [tvGenres, setTvGenres] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    async function loadGenres() {
      const tv = await fetchTvGenres();
      const movie = await fetchMovieGenres();
      setTvGenres(tv);
      setMovieGenres(movie);
    }
    loadGenres();
  }, []);

  const { movie } = useContext(MovieContext);
  const genres = [...tvGenres, ...movieGenres];

  useEffect(() => {
    document.title = movie?.title || movie?.original_name;
    return () => {
      document.title = "Movie Watchlist";
    };
  }, [movie]);

  if (!movie || genres.length === 0)
    return (
      <div className={styles.loading}>
        <LoadingAnimation style={{ opacity: 0.7 }} />
        <p>One moment please...</p>
      </div>
    );

  return (
    <main>
      <NavBar style={{ justifyContent: "none", gap: "0.625rem" }}>
        <Link to="/dashboard" style={{ color: "inherit" }}>
          <SecondaryButton type="circle">
            <BackIcon style={{ opacity: 0.8 }} />
          </SecondaryButton>
        </Link>
      </NavBar>

      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={`${movie?.title || movie.original_name} backdrop`}
          style={{ height: "40vh", objectFit: "cover", width: "100%" }}
        />
      </div>

      <div className={styles.body}>
        <div className={styles.main}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie?.title || movie.original_name} poster`}
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
          <h1>{movie?.title || movie.original_name}</h1>

          <div className={styles.quickInfo}>
            <div className={styles.movieBadge}>
              {movie.isTvShow ? "TV Show" : "Movie"}
            </div>

            <div className={styles.yearBadge}>
              <CalendarIcon />
              {movie?.release_date
                ? movie.release_date.split("-")[0]
                : movie.first_air_date.split("-")[0]}
            </div>

            <div className={styles.rating}>
              <StarIcon style={{ color: "#E7BF36" }} />
              {movie?.vote_average.toFixed(1)}
            </div>

            <p className={styles.ageRating}>{movie?.adult ? "18+" : "PG-13"}</p>
          </div>

          <p className={styles.overview}>{movie.overview}</p>

          <div className={styles.genres}>
            Genre:
            {movie.genre_ids.map((id) => {
              const result = genres.find((genre) => genre.id === id)?.name;
              return <span key={id}>{result}</span>;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MovieDetails;
