import { useContext, useEffect, useState } from "react";
import styles from "./MovieDetails.module.css";

import { MovieContext } from "../../context/MovieContext";

import CalendarIcon from "../../assets/icons/Calendar";
import StarIcon from "../../assets/icons/Star";

import ActionButton from "../../components/ActionButton";
import NavBar from "../../components/NavBar";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import LoadingAnimation from "../../assets/animation/LoadingAnimation";

import { fetchTvGenres } from "../../utils/fetchTvGenres";
import { fetchMovieGenres } from "../../utils/fetchMovieGenres";
import { useNavigate } from "react-router-dom";
import Back from "../../assets/icons/Back";
import { UserContext } from "../../context/UserContext";
import AddedBookmark from "../../assets/icons/AddedBookmark";
import AddBookmark from "../../assets/icons/AddBookmark";

function MovieDetails() {
  const navigate = useNavigate();
  const [tvGenres, setTvGenres] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const { user, userDispatch } = useContext(UserContext);

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

  const isTvSeries = movie.title ? false : true;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = movie?.title || movie?.original_name;
    return () => {
      document.title = "WatchNest | Movie & TV Show Watchlist";
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
        <SecondaryButton
          type="circle"
          onClick={() => {
            navigate(-1);
          }}
        >
          <Back style={{ opacity: 0.8 }} />
        </SecondaryButton>
      </NavBar>

      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={`${movie?.title || movie.original_name} backdrop`}
          loading="eager"
          style={{ height: "40vh", objectFit: "cover", width: "100%" }}
        />
      </div>

      <div className={styles.body}>
        <div className={styles.main}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie?.title || movie.original_name} poster`}
            loading="eager"
            className={styles.poster}
            width={240}
          />
          <ActionButton
            style={{
              background: user.watchList.some(
                (movieInWatchList) => movieInWatchList.movie.id === movie.id
              )
                ? "transparent"
                : "",
              color: user.watchList.some(
                (movieInWatchList) => movieInWatchList.movie.id === movie.id
              )
                ? "#fff"
                : "",
              padding: "0.75rem 3rem",
              fontSize: "1rem",
              maxWidth: "fit-content",
              borderRadius: "0.5rem",
            }}
            onClick={() => {
              if (
                user.watchList.some(
                  (movieInWatchList) => movieInWatchList.movie.id === movie.id
                )
              )
                return;
              userDispatch({
                type: "ADD_MOVIE_TO_WATCHLIST",
                payload: {
                  type: "add",
                  movie,
                  notification: `You added$${
                    movie?.title ? movie?.title : movie.original_name
                  }$ ${movie?.title ? "movie" : "tv series"} to your watchlist`,
                  timestamp: new Date().toISOString(),
                },
              });
            }}
            icon={
              user.watchList.some(
                (movieInWatchList) => movieInWatchList.movie.id === movie.id
              ) ? (
                <AddedBookmark />
              ) : (
                <AddBookmark />
              )
            }
          >
            {user.watchList.some(
              (movieInWatchList) => movieInWatchList.movie.id === movie.id
            )
              ? "Saved to Watchlist"
              : "Add to Watchlist"}
          </ActionButton>
        </div>

        <div className={styles.details}>
          <h1 className={styles.title}>
            {movie?.title || movie.original_name}
          </h1>

          <div className={styles.quickInfo}>
            <div className={styles.movieBadge}>
              {isTvSeries ? "TV Series" : "Movie"}
            </div>

            <div className={styles.yearBadge}>
              <CalendarIcon />
              {movie?.release_date
                ? movie?.release_date?.split("-")[0]
                : movie?.first_air_date?.split("-")[0]}
            </div>

            <div className={styles.rating}>
              <StarIcon style={{ color: "#E7BF36" }} />
              {movie?.vote_average.toFixed(1)}
            </div>

            <p className={styles.ageRating}>{movie?.adult ? "18+" : "PG-13"}</p>
          </div>

          <p className={styles.overview}>{movie?.overview}</p>

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
