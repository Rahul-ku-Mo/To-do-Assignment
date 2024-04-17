import { Link } from "react-router-dom";
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
import React from "react";
import useAuth from "@/hooks/use-auth";
import { useSignupForm } from "@/hooks/use-form";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
  const { signup } = useAuth();

  const navigate = useNavigate();

  const { values, handleChange } = useSignupForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !values.email ||
      !values.password ||
      !values.firstName ||
      !values.lastName
    ) {
      return;
    }

    await signup(
      values.email,
      values.password,
      values.firstName,
      values.lastName
    );

    toast("Account created successfully");

    navigate("/todoDashboard");
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input
                id="first-name"
                placeholder="Max"
                required
                value={values.firstName}
                onChange={handleChange("firstName")}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input
                id="last-name"
                placeholder="Robinson"
                required
                value={values.lastName}
                onChange={handleChange("lastName")}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
                  id="password"
                  value={values.password}
                  onChange={handleChange("password")}
                  type="password"
                  required
                  placeholder="password"
                />
          </div>
          <Button
                type="submit"
                className="w-full"
                disabled={
                  !values.email ||
                  !values.password ||
                  !values.firstName ||
                  !values.lastName
                }
              >
                Create an account
              </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
      </form>
    </Card>
  );
};

export default SignupForm;
