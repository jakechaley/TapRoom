import React from "react";
import PropTypes from "prop-types";


function Tap(props) {

  return (
    <React.Fragment>
      <div onClick = {() => props.whenTapClicked(props.id)}>
        <h1>Brand: {props.brand}</h1>
        <h2>Name: {props.name}</h2>
        <h2>Flavor: {props.flavor}</h2>
        <h3>Price: {props.price}</h3>
        <h3>Pints Left: {props.pintsLeft}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Tap.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string,
  id: PropTypes.string,
  pintsLeft: PropTypes.number,
  whenTapClicked: PropTypes.func
};

export default Tap;