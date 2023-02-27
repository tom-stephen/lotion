import React, { useState } from "react";
// import React from "react";
import Edit from './Edit';
function App() {
  // states
  const [component, setComponent] = useState([]);
  const [nextKey, setNextKey] = useState(1);
  window.onload = function() {

    // hamberger menue
    const hamberger = document.querySelector("#hamberger-button");
    const leftSide = document.querySelector("#left-side");
    hamberger.addEventListener ("click", function() {
      console.log("clicked");
      leftSide.classList.toggle("invisable");
    });

    // add note button


    const addNoteButton = document.querySelector("#add-note-button");
    addNoteButton.addEventListener ("click", function() {
      console.log("clicked");
      // make defult invisable
      const rightSideDefult = document.querySelector("#right-side-defult");
      rightSideDefult.classList.add("invisable");
      setComponent([...component, <Edit key={nextKey} />]);
      setNextKey(nextKey + 1);
    });



    // const addNoteButton = document.querySelector("#add-note-button");
    // addNoteButton.addEventListener ("click", function() {
    //   console.log("clicked");
    //   const newNote = document.createElement("<Edit/>");
    //   // add the id "note" to the note
    //   newNote.setAttribute("id", "note");

    //   // add the new note to the notes container
    //   const notesContainer = document.querySelector("#right-side");
    //   notesContainer.appendChild(newNote);

    //   // make defult invisable
    //   const rightSideDefult = document.querySelector("#right-side-defult");
    //   rightSideDefult.classList.add("invisable");
    // });

  }

  return (
    <div className="App">
      <div id="top-of-page">
        {/* hamberger menue */}
        <div id="hamberger">
          <button id="hamberger-button">☰</button>
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
            <button id="add-note-button">+</button>
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
          {component}
          {/* TEST 2 (WORKS!)*/}
          {/* <Edit id="edit"/> */}
{/* ADDING TEST HERE */}
        </div>
      </div>
    </div>
  );
}

export default App;
