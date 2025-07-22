import Star from "../../assets/Star";
import styles from "./Card.module.css";

function Card({ movie }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.ratingBadge}>
        <Star
          style={{ color: "#E7BF36", width: "16px", height: "16px" }}
          className={styles.starIcon}
        />
        {movie.vote_average.toFixed(1)}
      </div>
      <div className={styles.detail}>
        <p style={{ fontWeight: 500 }}>{movie.title}</p>
        <p style={{ fontSize: "0.75rem", opacity: 0.7 }}>
          {movie.release_date.split("-").at(0)}
        </p>
      </div>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} poster`}
        width={150}
      />
    </div>
  );
}

export default Card;
