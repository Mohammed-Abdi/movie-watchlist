import styles from "./SecondaryButton.module.css";

function SecondaryButton({ children, onClick, type }) {
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: type === "circle" ? "40px" : "fit-content",
    height: "40px",
    paddingInline: type === "circle" ? 0 : "0.625rem 0.875rem",
    borderRadius: type === "circle" ? "50%" : "8px",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: type === "circle" ? 0 : "0.25rem",
    cursor: "pointer",
  };

  return (
    <div
      className={styles.button}
      type="button"
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default SecondaryButton;
