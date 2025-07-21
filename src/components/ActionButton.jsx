const buttonStyle = {
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  fontWeight: 500,
  borderRadius: "0.25rem",
  border: "none",
  cursor: "pointer",
  width: "fit-content",
};

function ActionButton({ type, children, onClick, style }) {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      style={{ ...style, ...buttonStyle }}
    >
      {children}
    </button>
  );
}

export default ActionButton;
