import { useNavigate } from "react-router-dom";
import Back from "../../assets/icons/Back";
import NavBar from "../../components/NavBar";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import styles from "./Notifications.module.css";
import Logo from "../../components/Logo";
import NoData from "../../components/NoData";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { formatDateTime } from "../../services/formatDateTime";
import AddBookmark from "../../assets/icons/AddBookmark";
import RemoveBookmark from "../../assets/icons/RemoveBookmark";

function Notifications() {
  const { user } = useContext(UserContext);

  const isNotificationEmpty = user.notifications.length === 0 ? true : false;

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {!isNotificationEmpty && (
          <div className={styles.mainWrapper}>
            {user.notifications.map((notification, i) => {
              const messageParts = notification?.message?.split("$");
              const [before, highlight, after] = messageParts;
              return (
                <div key={i} className={styles.wrapper}>
                  {notification.type === "add" && <AddBookmark />}
                  {notification.type === "remove" && <RemoveBookmark />}
                  <div className={styles.details}>
                    <p>
                      {before}{" "}
                      <span
                        style={{
                          fontWeight: 500,
                          color:
                            notification.type === "add" ? "aqua" : "#ff3737ff",
                        }}
                      >
                        {highlight}
                      </span>{" "}
                      {after}
                    </p>

                    <p style={{ opacity: 0.5, fontSize: "0.75rem" }}>
                      {formatDateTime(notification?.timestamp)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {isNotificationEmpty && (
          <NoData
            style={{ marginBlock: "auto", paddingBottom: "3rem" }}
            text="You're all caught up. No new notifications"
          />
        )}
      </div>
    </main>
  );
}

export default Notifications;
