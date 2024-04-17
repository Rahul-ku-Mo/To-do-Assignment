import { createTodo, updateTodo, deleteTodo, Todo } from "@/api/todo-api.ts";
import Cookies from "js-cookie";
import { useTodoContext } from "./use-todo-context";
import { toast } from "sonner";
const useTodoAction = () => {
  const accesstoken = Cookies.get("accesstoken") as string;

  const { setTodos } = useTodoContext();

  const createTask = async (todo: { title: string; description: string }) => {
    const data = await createTodo(accesstoken, todo.title, todo.description);

    setTodos((prev: Todo[]) => [...prev, data]);

    toast.success("Task created successfully");
  };

  const updateTask = async (todoId: string, updatedTodo: Todo) => {
    await updateTodo(accesstoken, todoId, updatedTodo);

    console.log(updatedTodo);
    
    setTodos((prev: Todo[]) =>
      prev.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              title: updatedTodo.title,
              description: updatedTodo.description,
              checked: updatedTodo.checked,
            }
          : todo
      )
    );

    toast.success("Task updated successfully");
  };

  const removeTask = async (todoId: string) => {
    await deleteTodo(accesstoken, todoId);

    setTodos((prev: Todo[]) => prev.filter((todo) => todo.id !== todoId));

    toast.success("Task removed successfully");
  };

  return {
    createTask,
    updateTask,
    removeTask,
  };
};

export default useTodoAction;
