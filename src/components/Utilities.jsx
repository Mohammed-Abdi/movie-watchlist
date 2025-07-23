import { Link } from "react-router-dom";
import Bell from "../assets/icons/Bell";
import Bookmark from "../assets/icons/Bookmark";
import Search from "../assets/icons/Search";
import SecondaryButton from "./secondary-button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const utilitiesStyle = {
  display: "flex",
  alignItems: "center",
  transform: "translateX(0.625rem)",
};

function Utilities() {
  const { user, userDispatch } = useContext(UserContext);

  return (
    <div style={utilitiesStyle}>
      <Link to="search" style={{ color: "inherit" }}>
        <SecondaryButton type="circle">
          <Search style={{ opacity: 0.8 }} />
        </SecondaryButton>
      </Link>

      <Link
        to="notifications"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <SecondaryButton
          type="circle"
          onClick={() => userDispatch({ type: "CLEAR_NOTIFICATIONS" })}
        >
          <div style={{ position: "relative" }}>
            {user.newNotificationCount !== 0 && (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: "#ff0000d5",
                  fontSize: "0.625rem",
                  fontWeight: 500,
                  position: "absolute",
                  zIndex: 1,
                  top: "-0.3rem",
                  right: "-0.25rem",
                }}
              >
                {user.newNotificationCount}
              </span>
            )}
            <Bell style={{ opacity: 0.8 }} />
          </div>
        </SecondaryButton>
      </Link>

      <Link to="watchlist" style={{ color: "inherit", textDecoration: "none" }}>
        <SecondaryButton>
          <Bookmark style={{ opacity: 0.8 }} /> Watchlist
        </SecondaryButton>
      </Link>
    </div>
  );
}

export default Utilities;
