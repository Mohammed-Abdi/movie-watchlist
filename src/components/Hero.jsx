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
};

function Hero() {
  return (
    <section style={heroStyle}>
      <div>
        <h1>Your personal space for </h1>
        <h1>every movie you want to see </h1>
      </div>
      <p style={{ maxWidth: "32rem" }}>
        Create and manage a watchlist that fits your taste. Save now, watch
        later, never forget a film again.
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
