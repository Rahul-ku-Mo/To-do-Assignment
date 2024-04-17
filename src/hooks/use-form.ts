import { useState } from "react";
import { Todo } from "@/api/todo-api";

export const useLoginForm = () => {
  const [values, setValues] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return { values, handleChange };
};

export const useSignupForm = () => {
  const [values, setValues] = useState<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return { values, handleChange };
};

export const useCreateTaskForm = () => {
  const [values, setValues] = useState<{
    title: string;
    description: string;
  }>({
    title: "",
    description: "",
  });

  const handleChange =
    (prop: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return { values, handleChange, setValues };
};

export const useUpdateTaskForm = (Todo: Todo) => {
  const [values, setValues] = useState<{
    title: string;
    description: string;
  }>({
    title: Todo.title,
    description: Todo.description,
  });

  const handleChange =
    (prop: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return { values, handleChange };
};
