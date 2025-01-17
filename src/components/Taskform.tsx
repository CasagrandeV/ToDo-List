import styles from "./Taskform.module.css";
import uniqid from "uniqid";
import { ClipboardText, PlusCircle } from "@phosphor-icons/react/dist/ssr";
import Task from "./Task";
import { ChangeEvent, FormEvent, useState } from "react";
import TaskType from "../interfaces/task";

function Taskform() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [newTask, setNewTask] = useState("");

  const [finishedTasks, setFinishedTasks] = useState<string[]>([]);

  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    const newTaskReady: TaskType = { id: uniqid(), content: newTask };
    setTasks([...tasks, newTaskReady]);
    setNewTask("");
  }

  function handleNewInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function onTaskDelete(id: string) {
    const tasksWithoutDeleted: TaskType[] = tasks.filter(
      (task) => task.id != id
    );
    const finishedTasksWithoutDeleted = finishedTasks.filter(
      (task) => task != id
    );
    setTasks(tasksWithoutDeleted);
    setFinishedTasks(finishedTasksWithoutDeleted);
  }

  function onTaskFinish(id: string) {
    const unfinishedTask = finishedTasks.filter((task) => task === id);
    const tasksWithoutUnfinished = finishedTasks.filter((task) => task != id);
    if (unfinishedTask.length === 1) {
      setFinishedTasks(tasksWithoutUnfinished);
    } else {
      setFinishedTasks([...finishedTasks, id]);
    }
  }

  return (
    <form className={styles.taskForm} onSubmit={handleNewTask}>
      <section className={styles.taskInput}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewInputChange}
          value={newTask}
          required
        />
        <button type="submit">
          <span>Criar</span>
          <PlusCircle />
        </button>
      </section>
      <section className={styles.taskSection}>
        <header>
          <div className={styles.taskCounter}>
            <p>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </div>
          <div className={styles.finishedTaskCounter}>
            <p>Concluídas</p>
            <span>{finishedTasks.length}</span>
          </div>
        </header>
        {tasks.length < 1 ? (
          <div className={styles.taskList}>
            <ClipboardText className={styles.icon} size={"4rem"} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong> Crie
              tarefas e organize seus itens a fazer
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className={styles.taskList}>
              <Task
                content={task.content}
                onTaskDelete={onTaskDelete}
                onTaskFinish={onTaskFinish}
                id={task.id}
              />
            </div>
          ))
        )}
      </section>
    </form>
  );
}

export default Taskform;
