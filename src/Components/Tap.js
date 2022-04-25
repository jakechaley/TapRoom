import React from "react";
import PropTypes from "prop-types";


function Tap(props) {

  return (
    <React.Fragment>
      <h1>{props.brand}</h1>
      <h2>{props.name}</h2>
      <h2>{props.price}</h2>
      <h3>{props.flavor}</h3>
      <hr/>
    </React.Fragment>
  );
}

Tap.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string
};

export default Tap;