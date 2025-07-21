import ActionButton from "../../components/ActionButton";
import Logo from "../../components/Logo";
import NavBar from "../../components/navBar";
import "./Home.module.css";

function Home() {
  return (
    <main>
      <NavBar>
        <Logo />
        <ActionButton>Explore</ActionButton>
      </NavBar>
    </main>
  );
}

export default Home;
