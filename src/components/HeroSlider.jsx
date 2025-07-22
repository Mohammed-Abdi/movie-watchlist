import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ActionButton from "./ActionButton";

function HeroSlider({ movies }) {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
    >
      {movies.map((movie) => (
        <div key={movie.id} style={{ position: "relative" }}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            style={{ maxHeight: "80vh", objectFit: "cover", width: "100%" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              justifyContent: "center",
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "100%",
              width: "100%",
              background: "linear-gradient(#000000ff, transparent, #000000ff)",
              padding: "2.5rem",
              textAlign: "left",
            }}
          >
            <h1 style={{ maxWidth: "30rem" }}>{movie.title}</h1>
            <p
              style={{ maxWidth: "40rem", transform: "translateY(-0.625rem)" }}
            >
              {`${movie.overview.slice(0, 232)}${
                movie.overview.length > 232 ? "..." : ""
              }`}
            </p>
            <ActionButton
              style={{
                padding: "0.75rem 3rem",
                fontSize: "1rem",
              }}
            >
              Add to Watchlist
            </ActionButton>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default HeroSlider;
