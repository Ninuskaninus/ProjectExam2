import React from "react";
import { PageContainer, PageContent, FormContainer, FormHeader } from "../index.styles";
import { Link } from "react-router-dom";
import CreateAccountForm from "../../components/forms/createuserForm";

export default function CreateAccount() {
  return (
    <PageContainer>
      <PageContent>
        <FormContainer>
          <FormHeader>
            <p>Welcome!</p>
            <h1>Create an account</h1>
            <p>Already a member? <Link to="/login"><span>Log in</span></Link></p>
          </FormHeader>
          <CreateAccountForm />
          <div>
            <small>*Only a email registerd with @stud.noroff.no can be venue manager</small>
          </div>
        </FormContainer>
      </PageContent>
    </PageContainer>
  );
}