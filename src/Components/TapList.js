import React from "react";
import Tap from "./Tap";


const mainTapList = [
  {
    brand: "Epikombucha",
    name: "Walk On The Beach",
    price: "$3.00",
    flavor: "pineapple"
  },
  {
    brand: "Epikombucha",
    name: "Walk On The Beach",
    price: "$3.00",
    flavor: "pineapple"
  },
  {
    brand: "Epikombucha",
    name: "Walk On The Beach",
    price: "$3.00",
    flavor: "pineapple"
  }
];


function TapList(){
  return (
  <React.Fragment>
    <hr/>
    {mainTapList.map((tap, index) => 
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

export default TapList;