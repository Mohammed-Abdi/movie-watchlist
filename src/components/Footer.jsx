import Logo from "./Logo";

const footerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.625rem",
  padding: "1.25rem",
};

function Footer({ children }) {
  return (
    <footer style={footerStyle}>
      <Logo />
      <p style={{ fontSize: "0.875rem", opacity: 0.7, textAlign: "center" }}>
        Discover your next favorite flick, keep your must-watch list tidy, and
        get star-studded reviews — your ultimate movie companion awaits!
      </p>
      {children}
    </footer>
  );
}

export default Footer;
