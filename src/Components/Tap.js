import React from "react";
import PropTypes from "prop-types";


function Tap(props) {

  return (
    <React.Fragment>
      <div onClick = {() => props.whenTapClicked(props.id)}>
        <h1>Brand: {props.brand}</h1>
        <h2>Name: {props.name}</h2>
      </div>
        <h2>${props.price} per pint</h2>
        <h3>Flavor: {props.flavor}</h3>
        <hr/>
        <p>
          {props.pintsSold >= 124 ? (
            <span>No More Kombucha :/</span>
          ) : (
            <span>
              <p>{124 - props.pintsSold} Pints left</p>
              <p><button onClick={() => props.whenPintSold(props.id, 1)}>Sell Pint</button></p>
            </span>
          )}
        </p>
    </React.Fragment>
  );
}

Tap.defaultProps = {
  pintsSold:0
};

Tap.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func,
  pintsSold: PropTypes.number,
};

export default Tap;