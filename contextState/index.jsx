import React, { useState } from "react";
export const TodoContext = React.createContext({
  todoList: [],
  setTodoList: () => {},
});

const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
      }}
    >
      {children}
    </TodoContext.Provider>

    
  );
};
export default TodoContextProvider;
