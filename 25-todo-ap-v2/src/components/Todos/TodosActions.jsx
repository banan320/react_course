import Button from "../Ui/Button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from "./TodosActions.module.css";

RiDeleteBin2Line;
const TodosActions = ({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) => {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        disabled={!completedTodosExist}
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
};

export default TodosActions;
