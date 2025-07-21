import ActionButton from "../../components/ActionButton";
import NavBar from "../../components/navBar";
import "./Home.module.css";

function Home() {
  return (
    <main>
      <NavBar>
        <div>Logo</div>
        <ActionButton>Explore</ActionButton>
      </NavBar>
    </main>
  );
}

export default Home;
