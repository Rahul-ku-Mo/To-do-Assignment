import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UpdateTodoModal } from "@/components/modal/update-todo-modal";
import { DeleteTodoModal } from "./modal/delete-todo-modal";
import { Todo } from "@/api/todo-api";

interface ActionTodoProps {
  todoId: string;
  todo: Todo;
  todoChecked: boolean;
  updatedTodoChecked: (value: boolean) => void;
}

export const ActionTodo: React.FC<ActionTodoProps> = ({
  todoId,
  todo,
  todoChecked,
  updatedTodoChecked,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-8">
        <EllipsisVertical className="rounded-full object-contain grow min-w-8 max-w-8 min-h-8 size-8 hover:bg-slate-500/20 transition-all ease-linear duration-300 p-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 mr-4">
        <UpdateTodoModal
          todoId={todoId}
          todo={todo}
          todoChecked={todoChecked as boolean}
          updatedTodoChecked={updatedTodoChecked}
        />
        <DeleteTodoModal todoId={todoId} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
