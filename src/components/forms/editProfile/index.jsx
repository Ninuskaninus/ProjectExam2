import React from "react";
import {Form, FormItem, FormBtnContainer} from "../index.styles";
import FormBtn from "../../buttons/formBtn";
export default function EditProfileForm() {
  
  return (
    <Form>
      <FormItem>
        <label htmlFor="avatar">Avatar Url</label>
        <input type="text" name="avatar" id="avatar" />
      </FormItem>
      <FormItem>
        <label htmlFor="bio">Bio</label>
        <input type="textarea" name="bio" id="bio" />
      </FormItem>
      <FormBtnContainer>
        <FormBtn Text="Save" />
      </FormBtnContainer>
    </Form>
  );
}