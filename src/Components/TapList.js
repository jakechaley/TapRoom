import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";

function TapList(props){
  const {onSellPint} = props;

  return (
  <React.Fragment>
    <hr/>
    {props.tapList.map((tap) => 
    <React.Fragment key={tap.id}>
      <Tap 
      whenTapClicked = {props.onTapSelection}
      brand={tap.brand}
      name={tap.name}
      price={tap.price}
      flavor={tap.flavor}
      pintsLeft={tap.pintsLeft}
      id={tap.id} />
      <button onClick={()=> onSellPint(tap.id)}>Sell Pint</button>
      <hr/>
      </React.Fragment>
    )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func,
  onSellPint: PropTypes.func
};

export default TapList;