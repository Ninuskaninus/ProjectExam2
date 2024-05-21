import React, { useState } from "react";
import { Form, FormItem, FormImageContainer, FormItemCheckbox, FormBtnContainer } from "../index.styles";
import FormBtn from "../../buttons/formBtn";
import Icons from "../../../images";
import addVenue from "../../../js/post/addVenue.js";

export default function AddVenueForm() {
  const [formElement, setFormElements] = useState({
    name: "",
    description: "",
    media: [],
    price: 0,
    maxGuests: 0,
    meta: {
      parking: false,
      breakfast: false,
      wifi: false,
      pets: false,
    },
    location: {
      address: "",
      city: "",
      zip: "",
      country: "",
      continent: "",
    },
  });

  const pushImage = () => {
    const imageurl = document.getElementById("imageurl").value;
    if (imageurl) {
      const newImage = {
        url: imageurl,
        alt: "",
      };

      setFormElements((prevState) => ({
        ...prevState,
        media: [...prevState.media, newImage],
      }));

      document.getElementById("imageurl").value = ""; // Clear input field
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVenue(formElement);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const parsedValue = id === "price" || id === "maxGuests" ? parseInt(value, 10) : value;
    if (id === "price" || id === "maxGuests") {
      if (isNaN(parsedValue)) return;
    }
    setFormElements((prevState) => ({
      ...prevState,
      [id]: parsedValue,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setFormElements((prevState) => ({
      ...prevState,
      meta: {
        ...prevState.meta,
        [id]: checked,
      },
    }));
  };

  const handleLocationChange = (e) => {
    const { id, value } = e.target;
    setFormElements((prevState) => ({
      ...prevState,
      location: {
        ...prevState.location,
        [id]: value,
      },
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormItem>
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          id="name"
          value={formElement.name}
          onChange={handleInputChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="description">Description</label>
        <input
          required
          type="text"
          id="description"
          value={formElement.description}
          onChange={handleInputChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="imageurl">Image Url</label>
        <input type="text" id="imageurl" />
        <button type="button" onClick={pushImage}>
          <Icons.Add />
        </button>
      </FormItem>
      <FormImageContainer className="imageContainer">
        {formElement.media.map((img, index) => (
          <div key={`${img.url}-${index}`}>
            <img src={img.url} alt={img.alt} />
            <button
              type="button"
              onClick={() =>
                setFormElements((prevState) => ({
                  ...prevState,
                  media: prevState.media.filter((_, i) => i !== index),
                }))
              }
            >
              <Icons.Close />
            </button>
          </div>
        ))}
      </FormImageContainer>
      <FormItem>
        <label htmlFor="price">Price</label>
        <input
          maxLength={10000}
          required
          type="number"
          id="price"
          value={formElement.price}
          onChange={handleInputChange}
        />
      </FormItem>
      <FormItem>
        <label htmlFor="maxGuests">Max guests</label>
        <input
          required
          maxLength={100}
          type="number"
          id="maxGuests"
          value={formElement.maxGuests}
          onChange={handleInputChange}
        />
      </FormItem>
      <h3>Ammenities</h3>
      {['parking', 'breakfast', 'wifi', 'pets'].map((amenity) => (
        <FormItemCheckbox key={amenity}>
          <input
            type="checkbox"
            id={amenity}
            checked={formElement.meta[amenity]}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={amenity}>{amenity.charAt(0).toUpperCase() + amenity.slice(1)}</label>
        </FormItemCheckbox>
      ))}
      <h3>Location</h3>
      {['address', 'city', 'zip', 'country', 'continent'].map((field) => (
        <FormItem key={field}>
          <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type="text"
            id={field}
            value={formElement.location[field]}
            onChange={handleLocationChange}
          />
        </FormItem>
      ))}
      <FormBtnContainer>
        <FormBtn Text="Add Venue" type="submit" />
      </FormBtnContainer>
    </Form>
  );
}
