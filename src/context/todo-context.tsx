import { createContext, useState, useEffect } from "react";
import { getTodos } from "@/api/todo-api";
import { Todo } from "@/api/todo-api";
import Cookies from "js-cookie";

export type TodoContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const accesstoken = Cookies.get("accesstoken") as string;

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos(accesstoken);
      setTodos(data);
    };

    fetchTodos();
  }, [accesstoken]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
