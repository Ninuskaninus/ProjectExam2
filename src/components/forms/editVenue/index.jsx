import React, {useContext, useState} from "react";
import {Form, FormItem, FormBtnContainer, FormImageContainer, FormItemCheckbox} from "../index.styles";
import { AppContext } from "../../../contexts/provider";
import { useParams } from "react-router-dom";
import FormBtn from "../../buttons/formBtn";
import editVenue from "../../../js/put/editVenue.js";
import Icons from "../../../images/index.jsx";
import Loader from "../../loader";
import AddBtn from "../../buttons/addBtn";

export default function EditVenueForm() {
  const { myVenues } = useContext(AppContext);
  const { id } = useParams();
  const venue = myVenues.find((venue) => venue.id === id);
  const [loading, setLoading] = useState(false);
  const [formElements, setFormElements] = useState({
    name: venue.name,
    description: venue.description,
    price: venue.price,
    location: 
      {
        address: venue.location.address,
        city: venue.location.city,
        zip: venue.location.zip,
        country: venue.location.country,
        continent: venue.location.continent,
      },
    maxGuests: venue.maxGuests,
    media: [...venue.media],
    meta: {
      wifi: venue.meta.wifi,
      parking: venue.meta.parking,
      breakfast: venue.meta.breakfast,
      pets: venue.meta.pets,
    }
  });

    if (loading) {
    return <Loader />;
  }

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

      document.getElementById("imageurl").value = ""; 
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    editVenue(id, formElements);
    setLoading(false);
  }

    const handleLocationChange = (field, value) => {
    setFormElements((prevState) => ({
      ...prevState,
      location: {
        ...prevState.location,
        [field]: value,
      },
    }));
  };

  return (
    <Form>
      <FormItem>
        <label>Venue Name</label>
        <input
          value={formElements.name}
          onChange={(e) => setFormElements({...formElements, name: e.target.value})}
          type="text" />
      </FormItem>
      <FormItem>
        <label>Description</label>
        <textarea
          value={formElements.description}
          onChange={(e) => setFormElements({...formElements, description: e.target.value})}
          type="text" />
      </FormItem>
      <FormItem>
        <label>Price</label>
        <input
          value={formElements.price}
          onChange={(e) => setFormElements({...formElements, price: Number(e.target.value)})}
          type="number" />
      </FormItem>
      <FormItem>
        <label>Max Guests</label>
        <input
          value={formElements.maxGuests}
          onChange={(e) => setFormElements({...formElements, maxGuests: Number(e.target.value)})}
          type="number" />
      </FormItem>
      <h4>Images</h4>
        <FormItem>
        <label htmlFor="imageurl">Image Url</label>
        <input type="text" id="imageurl" />
        <AddBtn type="button" onClick={pushImage} />
         
        
      </FormItem>
      <FormImageContainer className="imageContainer">
        {formElements.media.map((img, index) => (
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
      <h4>Ammenitites</h4>
      <FormItemCheckbox>
        <input
          type="checkbox"
          checked={formElements.meta.wifi}
          onChange={(e) => setFormElements({ ...formElements, meta: { ...formElements.meta, wifi: e.target.checked } })}
        />
        <label>Wifi</label>
      </FormItemCheckbox>
      <FormItemCheckbox>
        <input
          type="checkbox"
          checked={formElements.meta.parking}
          onChange={(e) => setFormElements({ ...formElements, meta: { ...formElements.meta, parking: e.target.checked } })}
        />
        <label>Parking</label>
      </FormItemCheckbox>
      <FormItemCheckbox>
        <input
          type="checkbox"
          checked={formElements.meta.breakfast}
          onChange={(e) => setFormElements({ ...formElements, meta: { ...formElements.meta, breakfast: e.target.checked } })}
        />
        <label>Breakfast</label>
      </FormItemCheckbox>
      <FormItemCheckbox>
        <input
          type="checkbox"
          checked={formElements.meta.pets}
          onChange={(e) => setFormElements({ ...formElements, meta: { ...formElements.meta, pets: e.target.checked } })}
        />
        <label>Pets</label>
      </FormItemCheckbox>
      <h4>Location</h4>
      <FormItem>
        <label>Address</label>
        <input value={formElements.location.address} onChange={(e) => handleLocationChange("address", e.target.value)} type="text" />
      </FormItem>
      <FormItem>
        <label>City</label>
        <input value={formElements.location.city} onChange={(e) => handleLocationChange("city", e.target.value)} type="text" />
      </FormItem>
      <FormItem>
        <label>Zip</label>
        <input value={formElements.location.zip} onChange={(e) => handleLocationChange("zip", e.target.value)} type="text" />
      </FormItem>
      <FormItem>
        <label>Country</label>
        <input value={formElements.location.country} onChange={(e) => handleLocationChange("country", e.target.value)} type="text" />
      </FormItem>
      <FormItem>
        <label>Continent</label>
        <input value={formElements.location.continent} onChange={(e) => handleLocationChange("continent", e.target.value)} type="text" />
      </FormItem>
      <FormBtnContainer>
        <FormBtn type="button" onClick={handleFormSubmit} Text="Save" />
      </FormBtnContainer>
    </Form>
  );
}