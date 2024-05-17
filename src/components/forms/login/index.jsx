import React from "react";
import { FormBtnContainer, Form, FormItem } from "../index.styles"
import Icons from "../../../images";
import FormBtn from "../../buttons/formBtn";


export default function LoginForm() {
  return (
    <Form>
      <FormItem>
        <Icons.Mail />
        <label htmlFor="email">Email</label>
        <input type="email"  />
      </FormItem>
      <FormItem>
        <Icons.Password />
        <label htmlFor="password">Password</label>
        <input type="password" />
      </FormItem>
      <FormBtnContainer>
        <FormBtn Text="Log in" />
      </FormBtnContainer>
    </Form>
  );
}