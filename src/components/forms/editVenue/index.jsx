import React, {useContext, useState} from "react";
import {Form, FormItem, FormBtnContainer, FormImageContainer, FormImage} from "../index.styles";
import { AppContext } from "../../../contexts/provider";
import { useParams } from "react-router-dom";
import Icons from "../../../images";

export default function EditVenueForm() {
  const { myVenues } = useContext(AppContext);
  const { id } = useParams();
  const venue = myVenues.find((venue) => venue.id === id);
  const media = venue.media;
  const [formElements, setFormElements] = useState({
    name: venue.name,
    description: venue.description,
    price: venue.price,
    maxGuests: venue.maxGuests,
    media: {
      url: "",
      alt: "",
    },

  });

  return (
    <Form>
      <FormItem>
        <label>Venue Name</label>
        <input type="text" />
      </FormItem>
      <FormItem>
        <label>Description</label>
        <input type="textarea" />
      </FormItem>
      <FormItem>
        <label>Price</label>
        <input type="number" />
      </FormItem>
      <FormItem>
        <label>Max Guests</label>
        <input type="number" />
      </FormItem>
      <h3>Images</h3>
      <FormImageContainer>
        {media.map((img) => {
          return (
            <><FormImage key={venue.name + img.index} src={img.url} alt={venue.name} />
              <input placeholder="image url"></input>
            </>
          )
        })}
        <button>Add image</button>
      </FormImageContainer>
      <h3>Location</h3>
      <FormItem>
        <label>Address</label>
        <input type="text" />
      </FormItem>
      <FormItem>
        <label>City</label>
        <input type="text" />
      </FormItem>
      <FormItem>
        <label>Zip</label>
        <input type="text" />
      </FormItem>
      <FormItem>
        <label>Country</label>
        <input type="text" />
      </FormItem>
      <FormItem>
        <label>Continent</label>
        <input type="text" />
      </FormItem>
    </Form>
  );
}