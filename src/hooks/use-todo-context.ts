import { useContext } from "react";
import { TodoContext, TodoContextType } from "@/context/todo-context";

export const useTodoContext = (): TodoContextType  => {
    const context = useContext(TodoContext);
    if (!context) {
      throw new Error('TodoContext is not provided');
    }
    return context;
  }