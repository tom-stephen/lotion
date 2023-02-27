import React, { useState } from "react";
// import React from "react";
import Edit from './Edit';
function App() {
  // states
  const [component, setComponent] = useState([]);
  const [nextKey, setNextKey] = useState(1);
  // show edit component
  const [showEditComponent, setShowEditComponent] = useState(false);

  // hamberger menue
  const hamberger = () => {
    console.log("clicked");
    const leftSide = document.querySelector("#left-side");
    leftSide.classList.toggle("invisable");
  }


  // add note button
  const addNoteButton = () => {
    console.log("clicked");
    // make defult invisable
    const rightSideDefult = document.querySelector("#right-side-defult");
    rightSideDefult.classList.add("invisable");
    // add new note
    setShowEditComponent(true);
    // setComponent([...component, <Edit key={nextKey} />]);
    // setNextKey(nextKey + 1);
  }


  return (
    <div className="App">
      <div id="top-of-page">
        {/* hamberger menue */}
        <div id="hamberger">
          <button id="hamberger-button" onClick={hamberger}>☰</button>
        </div>
        {/* title */}
        <div id="title">
          <header id="title"><h1>Lotion</h1></header>
          <p>Like Notion, but worse.</p>
        </div>
      </div>

      {/* main content */}
      <div id="main-content">
        {/* left side bar */}
        <div id="left-side">
          <div id="left-side-header">
            <h2>Notes</h2>
            <button id="add-note-button" onClick={addNoteButton}>+</button>
          </div>
          <div id="notes-container">
            {/* add notes here. dont know how yet */}
          </div>
        </div>
        {/* right side */}
        <div id="right-side">
          <div id="right-side-defult">
            <h1>Select a note, or create a new one.</h1>
          </div>

{/* ADDING TEST HERE */}
          {true && <Edit />}
          {/* TEST 2 (WORKS!)*/}
          {/* <Edit id="edit"/> */}
{/* ADDING TEST HERE */}
        </div>
      </div>
    </div>
  );
}

export default App;
