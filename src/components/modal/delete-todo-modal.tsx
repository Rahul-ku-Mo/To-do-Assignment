import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Trash } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import useTodoAction from "@/hooks/use-todo-action";

interface DeleteTodoModalProps {
  todoId: string;
}
export const DeleteTodoModal: React.FC<DeleteTodoModalProps> = ({ todoId }) => {
  const { removeTask } = useTodoAction();

  const [open, setOpen] = useState<boolean>(false)

  const handleDelete = () => {
    removeTask(todoId);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Trash className="size-4" /> Delete
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Task</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this task?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-end">
          <Button
            className="bg-red-500 hover:bg-red-800 w-20"
            onClick={handleDelete}
          >
            Yes
          </Button>
          <Button className="bg-slate-500 w-20" onClick={() => setOpen(false)}>No</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
