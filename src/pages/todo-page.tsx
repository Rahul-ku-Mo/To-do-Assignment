import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { CreateTodo } from "@/components/create-todo";
import { ListTodo } from "@/components/list-todo";

import { useUserContext } from "@/hooks/use-user-context";

const TodoPage = () => {
  const { user } = useUserContext()

  return (
    <div>
      <Header firstName={user?.firstName} lastName={user?.lastName} />
      <main className="flex py-16 px-2 gap-4 md:flex-nowrap flex-wrap">
        <CreateTodo />
        <ListTodo />
      </main>
      <Footer />
    </div>
  );
};

export default TodoPage;
