import { Link } from "react-router-dom";
import styles from "./Search.module.css";
import Back from "../../assets/Back";
import NavBar from "../../components/navBar";
import SearchIcon from "../../assets/Search";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import { useEffect, useRef } from "react";

function Search() {
  const searchInput = useRef();

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <main className={styles.Search}>
      <NavBar
        style={{
          justifyContent: "none",
          gap: "0.625rem",
        }}
      >
        <Link to="/dashboard" style={{ color: "inherit" }}>
          <SecondaryButton type="circle">
            <Back style={{ opacity: 0.8 }} />
          </SecondaryButton>
        </Link>
        <div
          style={{
            position: "relative",
            width: "min(37.5rem, 100%)",
            marginInline: "auto",
          }}
        >
          <div className={styles.searchIcon}>
            <SearchIcon
              style={{ width: "18px", height: "18px", opacity: 0.7 }}
            />
          </div>
          <input
            ref={searchInput}
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
