import { Link } from "react-router-dom";
import Bell from "../assets/Bell";
import Bookmark from "../assets/Bookmark";
import Search from "../assets/Search";
import SecondaryButton from "./SecondaryButton";

const utilitiesStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.625rem",
};

function Utilities() {
  return (
    <div style={utilitiesStyle}>
      <Link to="/search" style={{ color: "inherit" }}>
        <SecondaryButton>
          <Search style={{ opacity: 0.8 }} />
        </SecondaryButton>
      </Link>

      <Link to="/watchlist" style={{ color: "inherit" }}>
        <SecondaryButton>
          <Bookmark style={{ opacity: 0.8 }} />
        </SecondaryButton>
      </Link>
      <Link to="/notifications" style={{ color: "inherit" }}>
        <SecondaryButton>
          <Bell style={{ opacity: 0.8 }} />
        </SecondaryButton>
      </Link>
    </div>
  );
}

export default Utilities;
