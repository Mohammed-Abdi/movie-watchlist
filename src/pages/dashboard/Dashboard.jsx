import Logo from "../../components/Logo";
import NavBar from "../../components/navBar";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <NavBar>
        <Logo />
      </NavBar>
    </main>
  );
}

export default Dashboard;
