import styles from "./Tasksection.module.css";
import ClipBoard from "../assets/Clipboard.svg";

function Tasksection() {
  return (
    <section className={styles.taskSection}>
      <header>
        <div className={styles.taskCounter}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className={styles.finishedTaskCounter}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </header>
      <div className={styles.taskList}>
        <img src={ClipBoard} />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong> Crie tarefas e
          organize seus itens a fazer
        </p>
      </div>
    </section>
  );
}

export default Tasksection;
