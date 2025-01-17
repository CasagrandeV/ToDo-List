import { useState } from "react";
import styles from "./Task.module.css";
import { Trash } from "@phosphor-icons/react";

interface TaskProps {
  content: string;
  onTaskDelete: (content: string) => void;
  onTaskFinish: (id: string) => void;
  id: string;
}

function Task({ content, onTaskDelete, onTaskFinish, id }: TaskProps) {
  const [active, setActive] = useState(false);

  function handleActiveTask() {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
    onTaskFinish(id);
  }

  function handleTaskDelete() {
    onTaskDelete(id);
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkBox}>
        <input type="checkbox" id={id} onClick={handleActiveTask} />
        <label className={styles.taskCheck} htmlFor={id}></label>
      </div>
      <p className={active ? styles.activeTaskContent : ""}>{content}</p>
      <button type="button" onClick={handleTaskDelete}>
        <Trash size="1.2rem" />
      </button>
    </div>
  );
}

export default Task;
