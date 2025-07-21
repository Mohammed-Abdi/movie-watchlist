import { Link } from "react-router-dom";
import Back from "../../assets/Back";
import NavBar from "../../components/navBar";
import SecondaryButton from "../../components/SecondaryButton";
import styles from "./Watchlist.module.css";
import Logo from "../../components/Logo";

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
          <SecondaryButton>
            <Back style={{ opacity: 0.8 }} />
          </SecondaryButton>
        </Link>
        <Logo text="Your WatchList" />
      </NavBar>
    </main>
  );
}

export default Watchlist;
