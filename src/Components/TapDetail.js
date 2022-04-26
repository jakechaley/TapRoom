import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){
  const { tap, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Tap Details</h1>
      <h2>Brand: {tap.brand}</h2>
        <h2>Name: {tap.name}</h2>
        <h2>Flavor: {tap.flavor}</h2>
        <h2>Price: {tap.price}</h2>
        <h2>Pints Left: {tap.pintsLeft}</h2>
      <button onClick={()=> onClickingDelete(tap.id)}>Delete Tap</button>
      <hr/>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default TapDetail;