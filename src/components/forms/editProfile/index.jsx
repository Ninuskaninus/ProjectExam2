import React, { useState } from 'react';
import { EditForm, EditFormItem, FormBtnContainer } from '../index.styles';
import FormBtn from '../../buttons/formBtn';
import editProfile from '../../../js/put/editprofile';

export default function EditProfileForm() {
  const [profile, setProfile] = useState({
    bio: '',
    avatar: {
      url: '',
      alt: '',
    },
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await editProfile(profile);
  };

  return (
    <EditForm id="editProfileForm">
      <EditFormItem>
        <label htmlFor="avatar">Avatar Url</label>
        <input
          onChange={(e) => {
            setProfile({
              ...profile,
              avatar: { ...profile.avatar, url: e.target.value },
            });
          }}
          value={profile.avatar.url}
          type="text"
          name="avatar"
          id="avatar"
        />
      </EditFormItem>
      <EditFormItem>
        <label htmlFor="bio">Bio</label>
        <textarea
          onChange={(e) => {
            setProfile({ ...profile, bio: e.target.value });
          }}
          value={profile.bio}
          type="textarea"
          name="bio"
          id="bio"
        />
      </EditFormItem>
      <FormBtnContainer>
        <FormBtn onClick={handleFormSubmit} Text="Save" />
      </FormBtnContainer>
    </EditForm>
  );
}
