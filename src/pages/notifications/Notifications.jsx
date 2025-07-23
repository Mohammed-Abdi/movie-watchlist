import { useNavigate } from "react-router-dom";
import styles from "./Notifications.module.css";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import Back from "../../assets/icons/Back";
import Logo from "../../components/Logo";
import NavBar from "../../components/NavBar";
import NoData from "../../components/NoData";

function Notifications() {
  const navigate = useNavigate();
  return (
    <main className={styles.notifications}>
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

        <Logo text="Notifications" />
      </NavBar>
      <div className={styles.body}>
        <NoData
          style={{ marginBlock: "auto", paddingBottom: "3rem" }}
          text="You're all caught up. No new notifications"
        />
      </div>
    </main>
  );
}

export default Notifications;
