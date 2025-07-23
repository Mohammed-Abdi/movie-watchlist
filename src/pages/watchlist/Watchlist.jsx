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
              <div className={styles.wrapper}>
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
                  <p style={{ opacity: 0.7, fontSize: "0.875rem" }}>
                    {list.movie?.release_date
                      ? list.movie?.release_date?.split("-").at(0)
                      : list.movie?.first_air_date?.split("-").at(0)}
                  </p>
                  <p style={{ opacity: 0.5, fontSize: "0.75rem" }}>
                    Added on {formatDateTime(list.movie.timestamp)}
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
