import React from "react";
import { PageHeader, PageContainer, PageBackground, Gradient, PageContent } from "./index.styles";
import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/login";
import Icons from "../../images";

export default function Login() {
  return (
    <PageContainer>
      <PageContent>
        <PageHeader>
          <h5>Welcome in!</h5>
          <h1>Log in</h1>
          <p>Don't have an account? <Link to="/createaccount">Register</Link></p>
        </PageHeader>
        <LoginForm />
      </PageContent>
      <PageBackground>
        <Icons.Hero />
      </PageBackground>
      <Gradient />
    </PageContainer>
  )
}