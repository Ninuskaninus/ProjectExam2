import React from "react";
import {Form, FormItem, FormImageContainer, FormItemCheckbox, FormBtnContainer} from "../index.styles";
import FormBtn from "../../buttons/formBtn";
import Icons from "../../../images";


export default function AddVenueForm() {
  return (
    <Form>
      <FormItem>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </FormItem>
      <FormItem>
        <label htmlFor="description">Description</label>
        <input type="textarea" id="description" />
      </FormItem>
      <FormItem>
        <label htmlFor="imageurl">Image Url</label>
        <input type="text" id="imageurl" />
        <Icons.Add/>
      </FormItem>
        <FormImageContainer>
          <img src="" alt="" />
          <img src="" alt="" />
        </FormImageContainer>
      <FormItem>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" />
      </FormItem>
      <FormItem>
        <label htmlFor="guests">Max guests</label>
        <input type="number" id="guests" />
      </FormItem>
        <h3>Ammenities</h3>
        <FormItemCheckbox>
          <input type="checkbox" id="parking" />
          <label htmlFor="parking">Parking</label>
      </FormItemCheckbox>
      <FormItemCheckbox>
        <input type="checkbox" id="breakfast" />
        <label htmlFor="breakfast">Breakfast</label>
      </FormItemCheckbox>
      <FormItemCheckbox>
        <input type="checkbox" id="wifi" />
        <label htmlFor="wifi">Wifi</label>
      </FormItemCheckbox>
      <FormItemCheckbox>
        <input type="checkbox" id="pets" />
        <label htmlFor="pets">Pets</label>
      </FormItemCheckbox>
      <h3>Location</h3>
      <FormItem>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" />
      </FormItem>
      <FormItem>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </FormItem>
      <FormItem>
        <label htmlFor="zip">Zip</label>
        <input type="text" id="zip" />
      </FormItem>
      <FormItem>
        <label htmlFor="country">Country</label>
        <input type="text" id="country" />
      </FormItem>
      <FormItem>
        <label htmlFor="continent">Continent</label>
        <input type="text" id="continent" />
      </FormItem>
      <FormBtnContainer>
        <FormBtn Text="Add Venue" type="submit" />
      </FormBtnContainer>

    </Form>
  );
}