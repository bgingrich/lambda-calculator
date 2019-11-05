import React from "react";
import "../../../App.css"

const NumberButton = (props) => {
  function handleClickEvent() {
    props.consoleLog(props.number)
  }
  return (
    <>
    <button className="number_button" onClick = { () => {props.changeData(props.number)}}>{props.number}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton; 