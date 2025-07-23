import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
import Back from "../../assets/icons/Back";
import NavBar from "../../components/NavBar";
import SearchIcon from "../../assets/icons/Search";
import SecondaryButton from "../../components/secondary-button/SecondaryButton";
import { useContext, useEffect, useRef, useState } from "react";
import { fetchMoviesBySearch } from "../../utils/fetchMoviesBySearch";
import Card from "../../components/card/Card";
import MacCommand from "../../assets/icons/MacCommand";
import Tv from "../../assets/icons/Tv";
import Movie from "../../assets/icons/Movie";
import NoData from "../../components/NoData";
import { SearchContext } from "../../context/SearchContext";
import LoadingAnimation from "../../assets/animation/LoadingAnimation";

function Search() {
  const { search, searchDispatch } = useContext(SearchContext);
  const [on, setOn] = useState("all");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const searchInput = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredResults(results);
  }, [results]);

  useEffect(() => {
    async function getQuery(search) {
      try {
        setIsLoading(true);
        const data = await fetchMoviesBySearch(search);
        setResults(data);
      } catch (error) {
        console.error(error.message);
        setError(
          "Oops! It looks like you're offline. Please check your internet connection and try again."
        );
      } finally {
        setIsLoading(false);
      }
    }

    if (!search || search?.length < 2) return;

    getQuery(search);
  }, [search]);

  useEffect(() => {
    if (!search) {
      setResults([]);
      setFilteredResults([]);
    }
  }, [search]);

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
            id="searchInput"
            ref={searchInput}
            spellCheck={false}
            value={search}
            onChange={(e) =>
              searchDispatch({
                type: "SYNC_SEARCH_QUERY",
                payload: e.target.value,
              })
            }
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
          {results.length === 0 && !search
            ? "Find your favorite movies, and TV show"
            : search.length > 1
            ? `All Results (${
                results.filter((result) => result.popularity > 1).length
              })`
            : "Find your favorite movies, and TV show"}
        </div>

        {!isLoading && !error && results.length !== 0 && (
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

        {!isLoading && !error && results.length !== 0 && (
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

      {!isLoading && !error && results.length === 0 && search.length > 1 && (
        <NoData
          style={{ marginTop: "15vh" }}
          text={`No results found for "${search}"`}
        />
      )}

      {isLoading && !error && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "0.625rem",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <LoadingAnimation style={{ opacity: 0.7 }} />
          <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
            One moment please...
          </p>
        </div>
      )}

      {!isLoading && error && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "0.625rem",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <NoData text={error} />
        </div>
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
