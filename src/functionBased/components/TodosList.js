import React from "react";
import TodoItem from "./TodoItem";

const TodosList = (param) => {
  return (
    <ul>
      {param.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={param.handleChangeProps}
          deleteTodoProps={param.deleteTodoProps}
          setUpdate={param.setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodosList;
