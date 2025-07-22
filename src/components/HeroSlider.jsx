import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActionButton from "./ActionButton";
import Star from "../assets/Star";

function HeroSlider({ movies }) {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    pauseOnHover: false,

    beforeChange: () => {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    },
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {movies.map((movie, index) => (
        <div key={movie.id} style={{ position: "relative" }}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            loading={index < 3 ? "eager" : "lazy"}
            style={{ height: "80vh", objectFit: "cover", width: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "100%",
              width: "100%",
              background: "linear-gradient(to top, #000000ff, transparent)",
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              paddingBottom: "5rem",
              gap: "1.25rem",
              textShadow: "1px 1px 4px #00000059",
            }}
          >
            <h1 style={{ maxWidth: "30rem" }}>{movie.title}</h1>
            <p
              style={{
                maxWidth: "40rem",
                transform: "translateY(-0.625rem)",
              }}
            >
              {`${movie.overview.slice(0, 232)}${
                movie.overview.length > 232 ? "..." : ""
              }`}
            </p>
            <div
              style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.25rem",
                  alignItems: "center",
                }}
              >
                <Star style={{ color: "#E7BF36" }} />{" "}
                {movie.vote_average.toFixed(1)}
              </div>
              <div
                style={{
                  backgroundColor: "#00ffff31",
                  padding: "0.5rem 1rem",
                  borderRadius: "1.25rem",
                  textShadow: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                {movie.release_date.split("-").at(0)}
              </div>
            </div>
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
