import styles from "./Todo.module.css";
import { RiTodoFill } from "react-icons/ri";

const Todo = ({ todo, deleteTodo, index }) => {
  return (
    <div onDoubleClick={() => deleteTodo(index)} className={styles.todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
};

export default Todo;
