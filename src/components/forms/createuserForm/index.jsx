import React from "react";
import {Form, FormItem, FormBtnContainer, FormItemCheckbox} from "../index.styles";
import Icons from "../../../images/index";
import FormBtn from "../../buttons/formBtn";

export default function CreateAccountForm() {
  return (
    <Form>
      <FormItem>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <Icons.UserId />
      </FormItem>
      <FormItem>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <Icons.Mail />
      </FormItem>
      <FormItem>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <Icons.Password />
      </FormItem>
      <FormItemCheckbox>
        <input type="checkbox" />
        <label htmlFor="">I want to be venue manager*</label>
      </FormItemCheckbox>
      <FormBtnContainer>
        <FormBtn Text="Create account" />
      </FormBtnContainer>
    </Form>
  );
}