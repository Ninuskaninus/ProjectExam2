import React from 'react';
import { Link } from 'react-router-dom';
import CreateAccountForm from '../../components/forms/createuserForm';
import {
  PageContainer,
  PageContent,
  PageHeader,
  PageBackground,
  Gradient,
} from '../login/index.styles';
import Icons from '../../images';

export default function CreateAccount() {
  return (
    <PageContainer>
      <PageContent>
        <PageHeader>
          <h5>Welcome in!</h5>
          <h1>Create an account</h1>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </PageHeader>
        <CreateAccountForm />
      </PageContent>
      <PageBackground>
        <Icons.Hero />
      </PageBackground>
      <Gradient />
    </PageContainer>
  );
}
