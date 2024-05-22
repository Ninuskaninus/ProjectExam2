import React, {useState, useEffect} from "react";
import {Form, FormItem, FormBtnContainer} from "../index.styles";
import FormBtn from "../../buttons/formBtn";
import editProfile from "../../../js/put/editprofile";

export default function EditProfileForm() {
  const [profile, setProfile] = useState({
    bio: "",
    avatar: {
      url: "",
      alt: ""
    },
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await editProfile(profile);
  }


  return (
    <Form>
      <FormItem>
        <label htmlFor="avatar">Avatar Url</label>
        <input
          onChange={(e) => {
            setProfile({ ...profile, avatar: { ...profile.avatar, url: e.target.value } });
          }}
          value={profile.avatar.url}
          type="text"
          name="avatar"
          id="avatar" />
      </FormItem>
      <FormItem>
        <label htmlFor="bio">Bio</label>
        <textarea
          onChange={(e) => {
            setProfile({ ...profile, bio: e.target.value });
          }}
          value={profile.bio}
          type="textarea"
          name="bio"
          id="bio" />
      </FormItem>
      <FormBtnContainer>
        <FormBtn onClick={handleFormSubmit} Text="Save" />
      </FormBtnContainer>
    </Form>
  );
}