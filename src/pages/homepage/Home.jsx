import ActionButton from "../../components/ActionButton";
import Hero from "../../components/Hero";
import Logo from "../../components/Logo";
import NavBar from "../../components/navBar";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.homepage}>
      <NavBar>
        <Logo />
        <ActionButton>Explore</ActionButton>
      </NavBar>
      <Hero />
    </main>
  );
}

export default Home;
