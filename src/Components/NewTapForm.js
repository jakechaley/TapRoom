import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";


function NewTapForm(props) {

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({brand: event.target.brand.value, name: event.target.name.value, price: parseInt(event.target.price.value), flavor: event.target.flavor.value, pintsLeft: 124, id: v4() });
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewTapFormSubmission}>
        <input 
        type="text"
        name="brand"
        placeholder="Brand"/>
        <input 
        type="text" 
        name="name"
        placeholder="Name"/>
        <input 
        type="text" 
        name="price"
        placeholder="Price"/>
        <input 
        type="text" 
        name="flavor"
        placeholder="Flavor"/>
        <button type="submit">Add New Tap!</button>
      </form>
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;