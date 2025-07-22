import { Link } from "react-router-dom";
import Star from "../../assets/Star";
import styles from "./Card.module.css";

function Card({ movie }) {
  return (
    <Link to className={styles.cardWrapper} style={{ color: "inherit" }}>
      <div className={styles.ratingBadge}>
        <Star
          style={{ color: "#E7BF36", width: "16px", height: "16px" }}
          className={styles.starIcon}
        />
        {movie?.vote_average.toFixed(1)}
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
        alt={`${movie?.title} poster`}
        width={150}
      />
    </Link>
  );
}

export default Card;
