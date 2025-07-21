const logoStyle = { fontSize: "1.5rem", fontWeight: 500 };

function Logo({ text }) {
  return <h1 style={logoStyle}>{text || "WatchList"}</h1>;
}

export default Logo;
