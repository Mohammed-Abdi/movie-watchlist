import ActionButton from "../../components/ActionButton";
import Footer from "../../components/Footer";
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
      <Footer>&copy; 2025. Mohammed Abdi. All rights reserved</Footer>
    </main>
  );
}

export default Home;
