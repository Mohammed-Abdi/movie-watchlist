import { Link } from "react-router-dom";
import Bell from "../assets/icons/Bell";
import Bookmark from "../assets/icons/Bookmark";
import Search from "../assets/icons/Search";
import SecondaryButton from "./secondary-button/SecondaryButton";

const utilitiesStyle = {
  display: "flex",
  alignItems: "center",
  transform: "translateX(0.625rem)",
};

function Utilities() {
  return (
    <div style={utilitiesStyle}>
      <Link to="/movies-explore/search" style={{ color: "inherit" }}>
        <SecondaryButton type="circle">
          <Search style={{ opacity: 0.8 }} />
        </SecondaryButton>
      </Link>

      <Link to="/movies-explore/notifications" style={{ color: "inherit" }}>
        <SecondaryButton type="circle">
          <Bell style={{ opacity: 0.8 }} />
        </SecondaryButton>
      </Link>

      <Link
        to="/movies-explore/watchlist"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <SecondaryButton>
          <Bookmark style={{ opacity: 0.8 }} /> Watchlist
        </SecondaryButton>
      </Link>
    </div>
  );
}

export default Utilities;
