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
      <h1>Your personal movie</h1>
      <h1>watchlist & rating vault</h1>
      <ActionButton
        style={{
          paddingInline: "3rem",
          paddingBlock: "0.75rem ",
          fontSize: "1rem",
        }}
      >
        Explore
      </ActionButton>
    </section>
  );
}

export default Hero;
