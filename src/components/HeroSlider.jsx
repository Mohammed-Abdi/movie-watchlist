import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActionButton from "./ActionButton";

function HeroSlider({ movies }) {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      {movies.map((movie, index) => (
        <div key={movie.id} style={{ position: "relative" }}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            loading={index < 2 ? "eager" : "lazy"}
            style={{ height: "80vh", objectFit: "cover", width: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "100%",
              width: "100%",
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 1), transparent)",
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              paddingBottom: "5rem",
              gap: "1.25rem",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.35)",
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
                maxWidth: "fit-content",
              }}
            >
              Add to Watchlist
            </ActionButton>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default HeroSlider;
