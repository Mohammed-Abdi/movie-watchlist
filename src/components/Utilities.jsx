import Bell from "../assets/Bell";
import Bookmark from "../assets/Bookmark";
import Search from "../assets/Search";

const utilitiesStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
};

function Utilities() {
  return (
    <div style={utilitiesStyle}>
      <Search />
      <Bookmark />
      <Bell />
    </div>
  );
}

export default Utilities;
