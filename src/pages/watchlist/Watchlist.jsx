import { useNavigate } from "react-router-dom";
import Back from "../../assets/icons/Back";
import NavBar from "../../components/NavBar";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import styles from "./Watchlist.module.css";
import Logo from "../../components/Logo";
import NoData from "../../components/NoData";

function Watchlist() {
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
        <NoData
          style={{ marginBlock: "auto", paddingBottom: "3rem" }}
          text="You haven't added anything to your watchlist!"
        />
      </div>
    </main>
  );
}

export default Watchlist;
