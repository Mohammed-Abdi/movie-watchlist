import { Link } from "react-router-dom";
import ActionButton from "./ActionButton";

const heroStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.25rem",
  textAlign: "center",
  transform: "translateY(-1.25rem)",
  marginTop: "30vh",
  paddingInline: "1.25rem",
};

function Hero() {
  return (
    <section style={heroStyle}>
      <div>
        <h1 style={{ maxWidth: "40rem" }}>
          Your personal hub for movies and shows to watch later
        </h1>
      </div>
      <p style={{ maxWidth: "34rem" }}>
        Build and manage a detailed watchlist tailored to your taste. Stay
        organized, track everything you plan to watch, and never forget a film
        again.
      </p>
      <Link to="/movies-explore">
        <ActionButton
          style={{
            padding: "0.75rem 3rem",
            fontSize: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          Explore
        </ActionButton>
      </Link>
    </section>
  );
}

export default Hero;
