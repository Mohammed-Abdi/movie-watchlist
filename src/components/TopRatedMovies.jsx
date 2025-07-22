import Card from "./card/Card";

function TopRatedMovies({ movies }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        padding: "1.25rem",
      }}
    >
      <h2>Top Rated Movies</h2>
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
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default TopRatedMovies;
