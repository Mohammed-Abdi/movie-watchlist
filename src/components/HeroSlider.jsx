import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HeroSlider({ movies }) {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
    >
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            style={{ maxHeight: "80vh", objectFit: "cover", width: "100%" }}
          />
          <div
            className="legend"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          >
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <button
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#e50914",
                border: "none",
                borderRadius: "4px",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Watch Now
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default HeroSlider;
