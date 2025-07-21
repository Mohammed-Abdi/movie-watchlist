import { Link } from "react-router-dom";
import styles from "./Search.module.css";
import Back from "../../assets/Back";
import NavBar from "../../components/navBar";
import SearchIcon from "../../assets/Search";
import SecondaryButton from "../../components/SecondaryButton";

function Search() {
  return (
    <main className={styles.Search}>
      <NavBar style={{ justifyContent: "none", gap: "0.625rem" }}>
        <Link to="/dashboard" style={{ color: "inherit" }}>
          <SecondaryButton>
            <Back style={{ opacity: 0.8 }} />
          </SecondaryButton>
        </Link>
        <div style={{ position: "relative", width: "100%" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-45%)",
              left: "1.25rem",
            }}
          >
            <SearchIcon
              style={{ width: "18px", height: "18px", opacity: 0.7 }}
            />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
      </NavBar>
    </main>
  );
}

export default Search;
