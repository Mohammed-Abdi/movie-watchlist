const buttonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  cursor: "pointer",
};

function SecondaryButton({ children, onClick }) {
  return (
    <div
      className="icon-button"
      type="button"
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default SecondaryButton;
