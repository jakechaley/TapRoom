import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){
  const { tap } = props;
  return (
    <React.Fragment>
      <h1>Tap Details</h1>
      <h2>{tap.brand}</h2>
        <h2>{tap.name}</h2>
        <h2>{tap.price}</h2>
        <h2>{tap.flavor}</h2>
      <hr/>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object
}

export default TapDetail;