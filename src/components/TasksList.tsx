import { ClipboardText, PlusCircle } from "phosphor-react";
import { useState } from "react";
import { Task } from "./Task";
import styles from "./TasksList.module.css";



interface Task {
  id: string;
  checked: boolean;
  text: string;
}

interface TasksProps {
  tasks: Task[],
  createTask: (text: string) => void;
  checkedTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function TasksList({ createTask, tasks, checkedTask, deleteTask }: TasksProps) {
  const createdTasks = tasks.length;

  const tasksCompleted = tasks.reduce((acc, task) => {
    if (task.checked) {
      return acc + 1
    }
    return acc;
  }, 0);


  const [text, setText] = useState('');

  function handleCreateTask() {
    createTask(text);
    setText('');
  }


  return (
    <div className={styles.main}>
      <div className={styles.newTask}>
        <input
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />

        <button type="submit" className={styles.button} onClick={handleCreateTask} >
          Criar
          <PlusCircle size={24} />
        </button>
      </div>

      <div className={styles.tasksList}>
        <div className={styles.info}>
          <div className={styles.createdTasks}>
            <strong>Tarefas criadas</strong>
            <span>{createdTasks}</span>
          </div>
          <div className={styles.done}>
            <strong>Concluídas</strong>
            <span>{tasksCompleted} de {createdTasks}</span>
          </div>
        </div>

        {createdTasks
          ?
          tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              checkedTask={checkedTask}
              deleteTask={deleteTask}
            />
          ))
          :
          <div className={styles.empty}>
            <span><ClipboardText size={56} /></span>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        }

      </div>


    </div>
  )

}

