import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface Task {
  id: string;
  checked: boolean;
  text: string;
}

interface TaskProps {
  task: Task,
  checkedTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Task({ task, checkedTask, deleteTask }: TaskProps) {
  function handleCheckTask() {
    checkedTask(task.id);
  }

  function handleDeleteTask() {
    deleteTask(task.id);
  }


  return (
    <div className={styles.task}>
      <button className={styles.checkbox} onClick={handleCheckTask}>
        <div className={task.checked ? styles.radio_checked : styles.radio_unchecked}>
          {
            task.checked &&
            <svg viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.43107 0.342093L4.09914 4.67403L1.61667 2.19156L0.780762 3.02747L4.09914 6.34584L9.26698 1.178L8.43107 0.342093Z" fill="#F2F2F2" />
            </svg>
          }
        </div>
      </button>

      <p className={task.checked ? styles.text_checked : styles.text_unchecked}>
        {task.text}
      </p>

      <button className={styles.delete} onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>

    </div>

  )
}