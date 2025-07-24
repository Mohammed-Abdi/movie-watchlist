import ArrowRight from "../../assets/icons/ArrowRight";
import styles from "./ScrollRight.module.css";

function ScrollRight() {
  return (
    <div className={styles.scrollRight}>
      <div className={styles.arrow}>
        <ArrowRight style={{ opacity: 0.7, width: "32px" }} />
      </div>
    </div>
  );
}

export default ScrollRight;
