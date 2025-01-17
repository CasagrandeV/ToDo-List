import styles from "./App.module.css";
import Header from "./components/Header.tsx";
import Taskform from "./components/Taskform.tsx";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Taskform />
      </div>
    </>
  );
}

export default App;
