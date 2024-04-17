import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import useAuth from "@/hooks/use-auth";
import { useLoginForm } from "@/hooks/use-form";

import { toast } from "sonner";


const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { values, handleChange } = useLoginForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      return;
    }

    await login(values.email, values.password);

    toast.success("Loggedin successfully");

    navigate("/todoDashboard");
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
      <CardContent className="grid gap-4">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={values.email}
                onChange={handleChange("email")}
                required
              />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
                id="password"
                type="password"
                placeholder="password"
                value={values.password}
                onChange={handleChange("password")}
                required
              />
          </div>
          <Button
              type="submit"
              className="w-full"
              disabled={!values.email || !values.password}
            >
              Login
            </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
      </form>
    </Card>
  );
};

export default LoginForm;
