const navBarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBlock: "1.25rem",
};

function navBar({ children }) {
  return <nav style={navBarStyle}>{children}</nav>;
}

export default navBar;
