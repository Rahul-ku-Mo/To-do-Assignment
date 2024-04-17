import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import { useCreateTaskForm } from "@/hooks/use-form";
import useTodoAction from "@/hooks/use-todo-action";

export function CreateTodo() {
  const { values, handleChange, setValues } = useCreateTaskForm();
  const { createTask } = useTodoAction();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.title || !values.description) {
      return;
    }

    createTask(values);

    setValues({ title: "", description: "" });
  };

  return (
    <Card className="w-full md:max-w-sm flex flex-col max-w-full max-h-96">
      <CardHeader>
        <CardTitle>Create a task</CardTitle>
        <CardDescription>How you'd like to start your day?</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} className="grid grow">
        <CardContent className="grid gap-2">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Applying Jobs"
              value={values.title}
              onChange={handleChange("title")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="I will apply to 5 jobs today."
              value={values.description}
              onChange={handleChange("description")}
            />
          </div>
        </CardContent>
        <CardFooter className="justify-end space-x-2">
          <Button type="submit">Create</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
