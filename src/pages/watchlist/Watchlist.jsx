import { Link } from "react-router-dom";
import Back from "../../assets/Back";
import NavBar from "../../components/navBar";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import styles from "./Watchlist.module.css";
import Logo from "../../components/Logo";
import NoData from "../../assets/NoData";

function Watchlist() {
  return (
    <main className={styles.Watchlist}>
      <NavBar
        style={{
          justifyContent: "none",
          gap: "0.625rem",
        }}
      >
        <Link to="/dashboard" style={{ color: "inherit" }}>
          <SecondaryButton type="circle">
            <Back style={{ opacity: 0.8 }} />
          </SecondaryButton>
        </Link>
        <Logo text="Your WatchList" />
      </NavBar>
      <div className={styles.body}>
        <NoData
          style={{ marginBlock: "auto", paddingBottom: "3rem" }}
          text="You haven't added anything to your watchlist!"
        />
      </div>
    </main>
  );
}

export default Watchlist;
