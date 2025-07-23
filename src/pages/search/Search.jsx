import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
import Back from "../../assets/icons/Back";
import NavBar from "../../components/NavBar";
import SearchIcon from "../../assets/icons/Search";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import { useEffect, useRef, useState } from "react";
import { fetchMoviesBySearch } from "../../utils/fetchMoviesBySearch";
import Card from "../../components/card/Card";
import MacCommand from "../../assets/icons/MacCommand";
import Tv from "../../assets/icons/Tv";
import Movie from "../../assets/icons/Movie";
import NoData from "../../components/NoData";

function Search() {
  const [query, setQuery] = useState("");
  const [on, setOn] = useState("all");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const searchInput = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredResults(results);
  }, [results]);

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
      <NavBar className={styles.searchNavContainer}>
        <SecondaryButton type="circle" onClick={() => navigate(-1)}>
          <Back style={{ opacity: 0.8 }} />
        </SecondaryButton>

        <div className={styles.searchWrapper}>
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

      <div className={styles.searchFilterRow}>
        <div
          className={`${styles.searchFilter} ${
            on === "all" ? styles["searchFilter--active"] : ""
          }`}
          onClick={() => {
            setFilteredResults(results);
            setOn("all");
          }}
        >
          {results.length === 0 && !query
            ? "Find your favorite movies, and TV show"
            : `All Results (${
                results.filter((result) => result.popularity > 1).length
              })`}
        </div>

        {results.length !== 0 && (
          <div
            className={`${styles.searchFilter} ${
              on === "movie" ? styles["searchFilter--active"] : ""
            }`}
            onClick={() => {
              setFilteredResults(results.filter((result) => result.title));
              setOn("movie");
            }}
          >
            <Movie />
            {`Movies (${
              results.filter((result) => result.popularity > 1 && result.title)
                .length
            })`}
          </div>
        )}

        {results.length !== 0 && (
          <div
            className={`${styles.searchFilter} ${
              on === "tv" ? styles["searchFilter--active"] : ""
            }`}
            onClick={() => {
              setFilteredResults(results.filter((result) => !result.title));
              setOn("tv");
            }}
          >
            <Tv />
            {`Tv Series (${
              results.filter((result) => result.popularity > 1 && !result.title)
                .length
            })`}
          </div>
        )}
      </div>

      {results.length === 0 && query && (
        <NoData text={`No results found for "${query}"`} />
      )}

      <div className={styles.searchCardWrapper}>
        {filteredResults.map(
          (result) =>
            result.popularity > 1 && <Card key={result.id} movie={result} />
        )}
      </div>
    </main>
  );
}

export default Search;
