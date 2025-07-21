import styles from "./BackgroundImage.module.css";

function BackgroundImage() {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="images/background.webp"
          alt="background image"
        />
      </div>
    </>
  );
}

export default BackgroundImage;
