import { Link } from "react-router-dom";

const pageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "40vh",
  gap: "1.25rem",
};

function NotFound() {
  return (
    <main style={pageStyle}>
      <h1>Page Not Found :(</h1>
      <Link to="/">Go to homepage</Link>
    </main>
  );
}

export default NotFound;
