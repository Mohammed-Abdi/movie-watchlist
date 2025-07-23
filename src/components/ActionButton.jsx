const buttonStyle = {
  padding: "0.5rem 1rem",
  fontWeight: 500,
  borderRadius: "0.25rem",
  border: "none",
  cursor: "pointer",
  width: "fit-content",
};

const wrapperStyle = { display: "flex", alignItems: "center", gap: "0.25rem" };

function ActionButton({ type, children, onClick, style, icon }) {
  return (
    <button
      name="action-button"
      className="button"
      type={type || "button"}
      onClick={onClick}
      style={{ ...buttonStyle, ...style }}
    >
      <div style={wrapperStyle}>
        {icon} <span style={{ whiteSpace: "nowrap" }}>{children}</span>
      </div>
    </button>
  );
}

export default ActionButton;
