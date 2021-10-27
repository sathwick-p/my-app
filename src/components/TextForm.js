import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLowerCase = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces have been removed", "success");
  };
  const [text, setText] = useState(""); //text is update using the setText
  //   text = "new text"; //wrong way to change the state
  //   setText("New text") //this is the correct way to chnage the state
  return (
    <>
      <div
        style={{
          color: props.mode === `dark` ? `white` : `#042743`,
        }}
      >
        <div className="mb-3">
          <h3>{props.heading}</h3>
          <textarea
            className="form-control"
            classID="myBox"
            cols="30"
            rows="3"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === `dark` ? `grey` : `light`,
              color: props.mode === `dark` ? `white` : `#042743`,
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove ExtraSpaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === `dark` ? `white` : `#042743`,
        }}
      >
        <h3>Your text's summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter your text for preview here"}</p>
      </div>
    </>
  );
}
