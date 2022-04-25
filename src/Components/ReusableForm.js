import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
          name="flavor"
          placeholder="Flavor"/>
        <input
          type="number"
          name="price"
          placeholder="Price Per Pint"
          min="0"
          step=".5"/>
        <input 
        type="number"
        name="pintsSold"
        placeholder="0"
        min="0"
        max="124"
        step="1"/>
          
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;