import RegisterForm from "@/components/form/Register";
import Layout from "@/components/layout/Layout";
import React from "react";

const Register = () => {
  return (
    <Layout isHome={false}>
      <RegisterForm />
    </Layout>
  );
};

export default Register;
