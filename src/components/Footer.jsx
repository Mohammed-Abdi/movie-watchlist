import Logo from "./Logo";

const footerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.625rem",
  padding: "1.25rem",
  textAlign: "center",
};

function Footer({ children }) {
  return (
    <footer style={footerStyle}>
      <Logo />
      <p style={{ fontSize: "0.875rem", opacity: 0.7, textAlign: "center" }}>
        Save films you’re excited about, explore what’s next, and build a
        watchlist that actually works for you.
      </p>
      {children}
    </footer>
  );
}

export default Footer;
