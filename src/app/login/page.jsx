"use client";

import Link from "next/link";
import { Card, Separator } from "@heroui/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {

      toast.success("Login Successful!");
      redirect("/");
    }

    if (error) {
      alert("Error");
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center my-3">
        <h1 className="text-2xl font-bold">Login</h1>
        <p>Stay fit with SportNest</p>
      </div>

      <Card className="border rounded-none p-6 max-w-md mx-auto">
        <Form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="enter your email" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex justify-center gap-2 w-full">
            <Button
              className="rounded-none w-full bg-[#03497F] text-white"
              type="submit"
            >
              Login
            </Button>
          </div>
        </Form>

        <div className="flex justify-center items-center gap-3 my-4">
          <Separator />
          <div className="whitespace-nowrap text-sm">
            Or continue with
          </div>
          <Separator />
        </div>

        <Button
          onClick={handleGoogleSignin}
          variant="bordered"
          className="w-full rounded-none"
        >
          <FcGoogle size={20} /> Sign in with Google
        </Button>

        {/* Signup Button */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don&apos;t have an account?
          </p>

          <Link href="/signup">
            <Button
              className="mt-2 w-full rounded-none border border-[#03497F] text-[#03497F]"
              variant="bordered"
            >
              Create an Account
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;