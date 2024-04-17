import { Todo } from "@/api/todo-api";
import { Checkbox } from "@/components/ui/checkbox";
import { ActionTodo } from "./action-todo";
import { useCheckTodo } from "@/hooks/use-check-todo";

interface ViewTodoProps {
  todo: Todo;
}

const ViewTodo: React.FC<ViewTodoProps> = ({ todo }) => {
  const { checkedState, updateCheckedState } = useCheckTodo(
    todo.checked as boolean
  );

  return (
    <div className="flex lg:items-center justify-between items-start">
      <Checkbox
        checked={checkedState}
        onCheckedChange={updateCheckedState}
        aria-label="Select task"
        className="translate-y-[2px]"
      />
      <div className="mx-4 space-y-1 grow ">
        <p className="text-sm font-medium leading-none">{todo?.title}</p>
        <p className="text-sm text-muted-foreground">{todo?.description}</p>
      </div>
      <ActionTodo
        todoId={todo?.id as string}
        todo={todo}
        todoChecked={checkedState as boolean}
        updatedTodoChecked={updateCheckedState}
      />
    </div>
  );
};

export default ViewTodo;
