import { useNavigate } from "react-router-dom";
import Back from "../../assets/icons/Back";
import NavBar from "../../components/NavBar";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import styles from "./Watchlist.module.css";
import Logo from "../../components/Logo";
import NoData from "../../components/NoData";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { formatDateTime } from "../../services/formatDateTime";
import Star from "../../assets/icons/Star";

function Watchlist() {
  const { user } = useContext(UserContext);

  const isWatchlistEmpty = user.watchList.length === 0 ? true : false;

  const navigate = useNavigate();
  return (
    <main className={styles.Watchlist}>
      <NavBar
        style={{
          justifyContent: "none",
          gap: "0.625rem",
        }}
      >
        <SecondaryButton
          type="circle"
          onClick={() => {
            navigate(-1);
          }}
        >
          <Back style={{ opacity: 0.8 }} />
        </SecondaryButton>
        <Logo text="Your WatchList" />
      </NavBar>
      <div className={styles.body}>
        {!isWatchlistEmpty && (
          <div className={styles.mainWrapper}>
            <p
              style={{
                opacity: 0.7,
                fontSize: "0.875rem",
                marginBottom: "1.25rem",
              }}
            >
              These are the titles you’re keeping an eye on — ready when you
              are.
            </p>
            {user.watchList.map((list) => (
              <div key={list.movie.id} className={styles.wrapper}>
                <img
                  className={styles.poster}
                  src={`https://image.tmdb.org/t/p/w92${list.movie?.poster_path}`}
                  alt={`${
                    list.movie?.title
                      ? list.movie?.title
                      : list.movie.original_name
                  } poster`}
                  width={50}
                />
                <div className={styles.details}>
                  <p>
                    {list.movie?.title
                      ? list.movie?.title
                      : list.movie.original_name}
                  </p>

                  <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
                    {list.movie?.overview?.slice(0, 40)}
                    {list.movie?.overview && "..."}
                  </p>

                  <div className={styles.info}>
                    <div className={styles.year}>
                      {list.movie?.release_date
                        ? list.movie?.release_date?.split("-").at(0)
                        : list.movie?.first_air_date?.split("-").at(0)}
                    </div>
                    <div className={styles.rating}>
                      <Star
                        style={{
                          color: "#E7BF36",
                          width: "16px",
                          height: "16px",
                        }}
                      />
                      {list.movie?.vote_average?.toFixed(1)}
                    </div>
                  </div>

                  <p style={{ opacity: 0.5, fontSize: "0.75rem" }}>
                    Added on {formatDateTime(list.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {isWatchlistEmpty && (
          <NoData
            style={{ marginBlock: "auto", paddingBottom: "3rem" }}
            text="You haven't added anything to your watchlist!"
          />
        )}
      </div>
    </main>
  );
}

export default Watchlist;
