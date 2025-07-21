import { Link } from "react-router-dom";
import NavBar from "../../components/navBar";
import styles from "./Notifications.module.css";
import SecondaryButton from "../../components/SecondaryButton";
import Back from "../../assets/Back";
import Logo from "../../components/Logo";
import NoData from "../../assets/NoData";

function Notifications() {
  return (
    <main className={styles.Notifications}>
      {" "}
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
        <Logo text="Notifications" />
      </NavBar>
      <NoData text="You're all caught up. No new notifications" />
    </main>
  );
}

export default Notifications;
