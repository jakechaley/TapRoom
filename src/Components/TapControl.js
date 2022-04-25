import React from "react";
import NewTapForm from "./NewTapForm";
import TapList from "./TapList";

class TapControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTapList: []
    };
  }

  handleAddingNewTapToList = (newTap) => {
    const newMainTapList = this.state.mainTapList.concat(newTap);
    this.setState({
      mainTapList: newMainTapList, 
      formVisibleOnPage: false});
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm onNewTapCreation = {this.handleAddingNewTapToList}/>
      buttonText= "Return To Tap List";
    } else {
      currentlyVisibleState = <TapList tapList={this.state.mainTapList}/>;
      buttonText= "Add Tap"
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
  
}

export default TapControl;