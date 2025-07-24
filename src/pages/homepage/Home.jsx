import { Link } from "react-router-dom";
import ActionButton from "../../components/ActionButton";
import BackgroundImage from "../../components/background-image/BackgroundImage";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Logo from "../../components/Logo";
import NavBar from "../../components/NavBar";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.homepage}>
      <BackgroundImage />
      <NavBar>
        <Logo />
        <Link to="/movies-explore">
          <ActionButton>Explore</ActionButton>
        </Link>
      </NavBar>
      <Hero />
      <Footer>&copy; 2025. Mohammed Abdi. All rights reserved</Footer>
    </main>
  );
}

export default Home;
