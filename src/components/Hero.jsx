import ActionButton from "./ActionButton";

const heroStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.25rem",
  textAlign: "center",
  transform: "translateY(-1.25rem)",
};

function Hero() {
  return (
    <section style={heroStyle}>
      <div>
        <h1>Your personal movie</h1>
        <h1>watchlist & rating vault</h1>
      </div>
      <p>
        Track what you’ve seen, save what you love, and rate like a critic — all
        in one personal movie vault.
      </p>
      <ActionButton
        style={{
          padding: "0.75rem 3rem",
          fontSize: "1rem",
        }}
      >
        Explore
      </ActionButton>
    </section>
  );
}

export default Hero;
