const navBarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBlock: "1.25rem",
};

function NavBar({ children, style }) {
  return <nav style={{ ...navBarStyle, ...style }}>{children}</nav>;
}

export default NavBar;
