import { Link } from "react-router-dom";
import styles from "./Search.module.css";
import Back from "../../assets/Back";
import NavBar from "../../components/navBar";
import SearchIcon from "../../assets/Search";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import { useEffect, useRef, useState } from "react";
import { fetchMoviesBySearch } from "../../utils/fetchMoviesBySearch";
import Card from "../../components/card/Card";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const searchInput = useRef();

  useEffect(() => {
    async function search(query) {
      const data = await fetchMoviesBySearch(query);
      setResults(data);
    }

    if (!query || query?.length < 2) return;

    search(query);
  }, [query]);

  useEffect(() => {
    if (!query) setResults([]);
  }, [query]);

  console.log(results);

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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
      </NavBar>
      <div style={{ marginTop: "3rem" }}>G</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          flexWrap: "wrap",
        }}
      >
        {results.map((result) => {
          return <Card movie={result} />;
        })}
      </div>
    </main>
  );
}

export default Search;
