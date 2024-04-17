import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Cookies from "js-cookie";

import { useAuthContext } from "@/hooks/use-auth-context";
import { useTodoContext } from "@/hooks/use-todo-context";

interface HeaderProps {
  firstName?: string;
  lastName?: string;
}
const Header: React.FC<HeaderProps> = ({
  firstName = "Ra",
  lastName = "Mo",
}) => {
  const { updateIsLoggedIn } = useAuthContext();

  const { setTodos } = useTodoContext();

  const logout = () => {
    //Remove token from cookies
    Cookies.remove("accesstoken");

    //remove current user todos
    setTodos([]);

    //update login status to false
    updateIsLoggedIn(false);
  };

  return (
    <div className=" w-full fixed top-0 px-2 py-2 flex justify-between dark:bg-slate-900 bg-slate-200/20 shadow-md">
      <h2 className="font-bold text-3xl tracking-tight">TaskList</h2>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                {firstName.slice(0, 1).concat(lastName.slice(0, 1))}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
