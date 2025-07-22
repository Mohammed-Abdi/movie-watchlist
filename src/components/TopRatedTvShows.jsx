import LoadingAnimation from "../assets/LoadingAnimation";
import Card from "./card/Card";

function TopRatedTvShows({ movies }) {
  if (!movies || movies?.length === 0)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1.25rem",
          alignItems: "center",
          minHeight: "225px",
        }}
      >
        <LoadingAnimation style={{ opacity: 0.7 }} />
      </div>
    );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        padding: "1.25rem",
      }}
    >
      <h2>Top Rated Tv Shows</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          gap: "1.25rem",
          maxWidth: "100%",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} isTvShow={true} />;
        })}
      </div>
    </div>
  );
}

export default TopRatedTvShows;
