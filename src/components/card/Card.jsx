import { Link } from "react-router-dom";
import Star from "../../assets/Star";
import styles from "./Card.module.css";
import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

function Card({ movie, isTvShow }) {
  const { dispatch } = useContext(MovieContext);

  const selectedMovie = { ...movie, isTvShow: isTvShow ? true : false };

  return (
    <Link
      to={`/dashboard/movie/${movie.id}`}
      className={styles.cardWrapper}
      style={{ color: "inherit" }}
      onClick={() =>
        dispatch({ type: "SET_CURRENT_MOVIE", payload: selectedMovie })
      }
    >
      <div className={styles.ratingBadge}>
        <Star
          style={{ color: "#E7BF36", width: "16px", height: "16px" }}
          className={styles.starIcon}
        />
        {movie?.vote_average?.toFixed(1)}
      </div>
      <div className={styles.detail}>
        <p style={{ fontWeight: 500 }}>
          {movie?.title ? movie?.title : movie.original_name}
        </p>
        <p style={{ fontSize: "0.75rem", opacity: 0.7 }}>
          {movie?.release_date
            ? movie?.release_date?.split("-").at(0)
            : movie?.first_air_date?.split("-").at(0)}
        </p>
      </div>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
        alt={`${movie?.title ? movie?.title : movie.original_name} poster`}
        loading="eager"
        width={150}
      />
    </Link>
  );
}

export default Card;
