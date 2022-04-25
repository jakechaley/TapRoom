import React from "react";

function Tap(props) {

  return (
    <React.Fragment>
      <h3>{props.brand}</h3>
      <h2>{props.name}</h2>
      <h2>{props.price}</h2>
      <h1>{props.flavor}</h1>
      <hr/>
    </React.Fragment>
  );
}

export default Tap;