import { useContext, useState } from "react";
import { useImmer } from "use-immer";
import { toast } from "react-toastify";

import TodosContext from "../../context/todosContext";
import { deleteTodo, editTodo, updateTodo } from "../../services/todosServices";

const Todo = ({ data }) => {
  const { todos, setTodos } = useContext(TodosContext);
  const [checked, setChecked] = useImmer(data.checked);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(data.title);

  const check = async () => {
    try {
      const result = await editTodo(data._id, localStorage.getItem('token'));
      if (result.status === 200) {
        setTodos((draft) => {
          draft = result.data;
        });
        setChecked((draft) => !draft);
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const removeTodo = async () => {
    const allTodos = [...todos];
    try {
      setTodos((draft) => draft.filter((todo) => todo._id !== data._id));

      const result = await deleteTodo(data._id, localStorage.getItem('token'));
      toast.info('Todo deleted successfully', { icon: '💣' });
      if (result.status !== 200) {
        setTodos(allTodos);
      }
    } catch (err) {
      setTodos(allTodos);
      console.log(err.response.data);
    }
  };

  const handleUpdateTitle = async () => {
    try {
      const result = await updateTodo(data._id, { title: updatedTitle }, localStorage.getItem('token'));
      if (result.status === 200) {
        setTodos((draft) => {
          const updatedTodoIndex = draft.findIndex((todo) => todo._id === data._id);
          if (updatedTodoIndex !== -1) {
            draft[updatedTodoIndex] = result.data;
          }
        });
        setIsEditing(false);
        toast.success('Todo updated successfully', { icon: '👏🏻' });
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <li className="cursor list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
      <div className="d-flex align-items-center">
        {isEditing ? (
          <div className="input-group">
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="form-control"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-primary" onClick={handleUpdateTitle}>
                Update
              </button>
            </div>
          </div>
        ) : (
          <h6 style={{ textDecoration: checked ? 'line-through' : 'none' }} onClick={check}>
            {data.title}
          </h6>
        )}
      </div>
      <span onClick={removeTodo}>
        <i style={{ color: 'blue' }} className="fa fa-trash-alt"></i>
      </span>
      {!isEditing ? (
        <span className="ms-2" onClick={() => setIsEditing(true)}>
          <i style={{ color: 'green' }} className="fa fa-pencil"></i> {/* Pencil icon */}
        </span>
      ) : null}
    </li>
  );
};

export default Todo;
