import styles from "./Header.module.css";
import Logo from "../assets/Logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo do projeto to-do" />
    </header>
  );
}

export default Header;
