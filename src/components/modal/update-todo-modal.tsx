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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PenLine } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";

import useTodoAction from "@/hooks/use-todo-action";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo } from "@/api/todo-api";
import { useUpdateTaskForm } from "@/hooks/use-form";

interface UpdateTodoModalPorps {
  todoId: string;
  todo: Todo;
  todoChecked: boolean;
  updatedTodoChecked: (value: boolean) => void;
}

export const UpdateTodoModal: React.FC<UpdateTodoModalPorps> = ({
  todoId,
  todo,
  todoChecked: checked,
  updatedTodoChecked,
}) => {
  const { values, handleChange } = useUpdateTaskForm(todo);
  const { updateTask } = useTodoAction();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e: Event) => e.preventDefault()}>
          <PenLine className="size-4" /> Update
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            Make changes to your task here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={values.title}
              onChange={handleChange("title")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={values.description}
              onChange={handleChange("description")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="progress" className="text-right">
              Completed
            </Label>
            <Checkbox
              checked={checked}
              onCheckedChange={updatedTodoChecked}
              aria-label="Select task"
              className="translate-y-[2px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              updateTask(todoId, { ...values, checked });
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
