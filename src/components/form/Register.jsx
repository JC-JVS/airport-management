import React, { useState } from "react";
import FormContainer from "./Container";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import { useRouter } from "next/router";
import Link from "next/link";
import Loader from "../shared/Loader";

const RegisterForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState();

  return (
    <FormContainer title="Welcome to Insider!" type="Create an Account">
      <form className="w-full">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="FirstName"
          />
          <Input
            type="text"
            placeholder="LastName"
          />
        </div>
        <Input
         
          type="email"
          placeholder="Email"
        />
        <Input
          
          type="password"
          placeholder="Password"
        />
        <Input
          
          type="password"
          placeholder="Confirm Password"
        />
        <Button
          type="submit"
          className="flex h-10 w-full items-center justify-center rounded bg-primary text-sm font-medium leading-snug text-white shadow-md transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-secondary hover:shadow-lg active:bg-[#5f4ce1] active:shadow-lg"
        >
          Register
        </Button>
        <div className="text-left text-sm">
          <span className="text-zinc-900">Have already and account? </span>
          <Link
            className="text-primary transition duration-200 ease-in-out focus:text-primary hover:text-secondary"
            href="/login"
          >
            Login Here
          </Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;