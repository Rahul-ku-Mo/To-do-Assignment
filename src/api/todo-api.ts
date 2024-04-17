import axios, { AxiosError } from "axios";

export type Todo = {
  id?: string;
  title: string;
  description: string;
  checked?: boolean;
  createdAt? : Date;
  updatedAt? : Date;
};

export const createTodo = async (
  accesstoken: string,
  title: string,
  description: string
) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/todos`,
      {
        title,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );

    if (response.status === 201) {
      return response.data.data;
    }
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.log(err.message);
    }
  }
};

export const getTodos = async (accesstoken: string) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    });

    if (response.status === 200) {
      return response.data.data;
    }
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.log(err.message);
    }
  }
};

export const updateTodo = async (
  accesstoken: string,
  todoId: string,
  updatedTodo: Todo
) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/todos/${todoId}`,
      updatedTodo,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );

    if (response.status === 201) {
      return response.data.data;
    }
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.log(err.message);
    }
  }
};

export const deleteTodo = async (accesstoken: string, todoId: string) => {
  try {
    await axios.delete(`${import.meta.env.VITE_BASE_URL}/todos/${todoId}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    });
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.log(err.message);
    }
  }
};
