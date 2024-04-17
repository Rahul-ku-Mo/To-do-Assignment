import { useTodoContext } from "@/hooks/use-todo-context";

import ViewTodo from "./view-todo";

export function ListTodo() {
  const { todos } = useTodoContext();

  return (
    <div className="space-y-8 rounded-lg border p-6 w-full ">
      <h2 className="text-2xl font-semibold">Recent Tasks</h2>

      {todos.length > 0 ? (
        todos.map((todo) => {
          return <ViewTodo todo={todo} key={todo.id} />;
        })
      ) : (
        <div className=" text-center font-semibold text-muted-foreground">
          "No tasks yet."
        </div>
      )}
    </div>
  );
}
