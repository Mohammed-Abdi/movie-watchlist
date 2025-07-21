const footerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBlock: "1.25rem",
};

function Footer({ children }) {
  return <footer style={footerStyle}>{children}</footer>;
}

export default Footer;
