import React from "react";
import NewTapForm from "./NewTapForm";
import TapList from "./TapList";
import TapDetail from "./TapDetail";

class TapControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTapList: [],
      selectedTap: null
    };
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.mainTapList.filter(tap => tap.id === id)[0];
    this.setState({
      selectedTap: selectedTap
    });
  }

  handleAddingNewTapToList = (newTap) => {
    const newMainTapList = this.state.mainTapList.concat(newTap);
    this.setState({
      mainTapList: newMainTapList, 
      formVisibleOnPage: false});
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTap != null) {
      currentlyVisibleState = <TapDetail tap = {this.state.selectedTap} />
      buttonText = "Return to Tap List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTapToList}  />;
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <TapList tapList={this.state.mainTapList} onTapSelection={this.handleChangingSelectedTap} />;
      buttonText = "Add Tap";
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