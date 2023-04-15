import React from "react";
import LoginForm from "@/components/form/Login";
import Layout from "@/components/layout/Layout";

const Login = () => {
  return (
    <Layout isHome={false}>
      <LoginForm />
    </Layout>
  );
};

export default Login;
