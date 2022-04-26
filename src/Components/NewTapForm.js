import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";


function NewTapForm(props) {

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({brand: event.target.brand.value, name: event.target.name.value, price: event.target.price.value, flavor: event.target.flavor.value, pintsLeft: 124, id: v4() });
  }
  
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler= {handleNewTapFormSubmission} buttonText="submit"/>
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;