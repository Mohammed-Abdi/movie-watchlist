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
      <SecondaryButton>
        <Search style={{ opacity: 0.8 }} />
      </SecondaryButton>

      <SecondaryButton>
        <Bookmark style={{ opacity: 0.8 }} />
      </SecondaryButton>

      <SecondaryButton>
        <Bell style={{ opacity: 0.8 }} />
      </SecondaryButton>
    </div>
  );
}

export default Utilities;
