import { Link } from "react-router-dom";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="flex fixed bottom-0 items-center">
      <Link
        to="https://github.com/Rahul-ku-Mo/To-do-Assignment"
        target="_blank"
        className="w-full p-2 text-sm text-slate-600 dark:text-slate-100 hover:text-slate-800 bg-slate-200/20 dark:bg-slate-900 shadow-sm font-bold fixed bottom-0 flex justify-end items-center gap-2"
      >
        Check out this page <GitHubLogoIcon />
      </Link>
    </footer>
  );
};

export default Footer;
