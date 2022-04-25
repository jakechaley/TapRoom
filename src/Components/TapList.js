import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";

function TapList(props){
  return (
  <React.Fragment>
    <hr/>
    {props.tapList.map((tap, index) => 
      <Tap 
      brand={tap.brand}
      name={tap.name}
      price={tap.price}
      flavor={tap.flavor}
      key={index}/>
    )}
  </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
}

export default TapList;