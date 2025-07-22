import Card from "./card/Card";

function PopularMovies({ movies }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        padding: "1.25rem",
      }}
    >
      <h2>Popular Movies</h2>
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

export default PopularMovies;
