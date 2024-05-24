import React, { useEffect } from 'react';
import {
  PageContainer,
  PageContent,
  FormContainer,
  FormHeader,
} from '../index.styles';
import AddVenueForm from '../../components/forms/addvenue';

export default function AddVenue() {
  useEffect(() => {
    document.title = 'Holidaze | Add Venue';
  }, []);

  return (
    <PageContainer>
      <PageContent>
        <FormContainer>
          <FormHeader>
            <h2>Add venue</h2>
          </FormHeader>
          <AddVenueForm />
        </FormContainer>
      </PageContent>
    </PageContainer>
  );
}
