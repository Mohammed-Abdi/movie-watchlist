import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
import Back from "../../assets/Back";
import NavBar from "../../components/NavBar";
import SearchIcon from "../../assets/Search";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import { useEffect, useRef, useState } from "react";
import { fetchMoviesBySearch } from "../../utils/fetchMoviesBySearch";
import Card from "../../components/card/Card";
import MacCommand from "../../assets/MacCommand";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const searchInput = useRef();
  const navigate = useNavigate();

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

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInput.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className={styles.Search}>
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

          <div className={styles.keyIcon}>
            <MacCommand />
            <span>+ K</span>
          </div>
        </div>
      </NavBar>

      <div style={{ marginTop: "5rem", paddingInline: "1.25rem" }}>
        <div
          style={{
            backgroundColor: "#00ffff31",
            padding: "0.5rem 1rem",
            borderRadius: "1.25rem",
            fontSize: "0.875rem",
            fontWeight: 500,
            width: "fit-content",
          }}
        >
          {results.length === 0
            ? "Find your favorite movies, and TV show"
            : `${
                results.filter((result) => result.popularity > 1).length
              } Results Found`}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          flexWrap: "wrap",
          padding: "1.5rem 1.25rem",
        }}
      >
        {results.map((result) => {
          if (result.popularity > 1) return <Card movie={result} />;
        })}
      </div>
    </main>
  );
}

export default Search;
