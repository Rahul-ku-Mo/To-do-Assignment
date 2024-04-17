import { ModeToggle } from "@/components/mode-toggle";

export const ThemeHeader = () => {
  return (
    <div className="w-full fixed z-20 top-0 px-2 py-2 flex justify-between dark:bg-slate-900 bg-slate-200/20 shadow-md">
      <h2 className="font-bold text-3xl tracking-tight">ToDoList</h2>
      <ModeToggle />
    </div>
  );
};
