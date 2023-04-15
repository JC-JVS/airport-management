import React, { useState } from "react";
import FormContainer from "./container";
import Input from "@/components/shared/input";
import Button from "@/components/shared/button";
import Loader from "../shared/loader";
import Link from "next/link";

const LoginForm = () => {
  return (
    <FormContainer
      title="Welcome to Sky Stream Enterprise!"
      type="Sign in to your account"
    >
      <form className="w-full">
        <Input
          labelClassName="sr-only"
          label="email"
          type="email"
          className=""
          placeholder="Email"
        />
        <Input
          labelClassName="sr-only"
          label="password"
          type="password"
          className=""
          placeholder="Password"
        />
        <p className="-mt-2 mb-2 flex justify-end text-left text-sm">
          Forget Password?
        </p>
        <Link
          href="/"
          className="flex h-10 w-full items-center justify-center rounded bg-primary text-sm font-medium leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-secondary hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#5f4ce1] active:shadow-lg"
        >
          Login
        </Link>
        <div className="text-left text-sm">
          <span className="text-zinc-900">Don&apos;t have an account? </span>
          <Link
            className="text-primary transition duration-200 ease-in-out hover:text-secondary focus:text-primary "
            href="/register"
          >
            Register
          </Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
