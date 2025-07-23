const navBarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.875rem 1.25rem",
  position: "fixed",
  top: 0,
  zIndex: 2,
  width: "100%",
  background: `linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.7) 0%,
  rgba(0, 0, 0, 0.55) 15%,
  rgba(0, 0, 0, 0.4) 35%,
  rgba(0, 0, 0, 0.25) 55%,
  rgba(0, 0, 0, 0.1) 75%,
  rgba(0, 0, 0, 0.03) 90%,
  transparent 100%
)`,
};

function NavBar({ children, style }) {
  return <nav style={{ ...navBarStyle, ...style }}>{children}</nav>;
}

export default NavBar;
