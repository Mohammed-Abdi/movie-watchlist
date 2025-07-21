import ActionButton from "./ActionButton";

const heroStyle = {
  display: "flex",
  textAlign: "center",
  margin: "auto",
  flexDirection: "column",
  gap: "1.25rem",
};

function Hero() {
  return (
    <section style={heroStyle}>
      <h1>Your personal movie</h1>
      <h1>watchlist & rating vault</h1>
      <ActionButton style={{ paddingInline: "2rem" }}>Explore</ActionButton>
    </section>
  );
}

export default Hero;
