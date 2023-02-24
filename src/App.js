// import React, { useState } from "react";

function App() {

  window.onload = function() {
  // const plussNote = document.getElementById("add-page-button");
  // plussNote.addEventListener ("click", () => {
  //   // add a new note
  // });

  const hamberger = document.querySelector("#hamberger-button");
  const leftSide = document.querySelector("#left-side");
  hamberger.addEventListener ("click", function() {
    console.log("clicked");
    leftSide.classList.toggle("invisable");
  });

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
          {/* <h1>Select a note, or create a new one.</h1> */}

{/* ADDING TEST HERE */}
          {/* bar to put title in */}
          <div id="note-header-box">
            <div id="note-title-box">
              <input id="note-title" type="text" placeholder="Untitled"></input>
              <input id="note-date"type="datetime-local" />
            </div>

            <div id="note-header-buttons">
              <button id="save">Save</button>
              <button id="delete">Delete</button>
            </div>
          </div>

          {/* making note tools */}
          <div id="note-tools">
            <select onchange="changeFontSize(this)">
              <option value="1" id="size-normal">normal</option>
              <option value="2" id="size-subheader">Subheader</option>
              <option value="3" id="size-header">Header</option>
            </select>
            <button id="bold">B</button>
            <button id="italic">I</button>
            <button id="underline">U</button>
            <button id="link">&#128279;</button>
            <button id="bulleted-list">Bulleted List</button>
            <button id="numbered-list">Numbered List</button>
          </div>

{/* ADDING TEST HERE */}
        </div>
      </div>
    </div>
  );
}

export default App;
