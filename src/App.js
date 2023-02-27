import React, { useState } from "react";
import Edit from './Edit';
import NoteListPreview from './NoteListPreview';

function App() {
  // list of notes
  const [component, setComponent] = useState([]);
  console.log(component);
  // show edit component
  const [showEditComponent, setShowEditComponent] = useState(false);

  // hamberger menue
  const hamberger = () => {
    console.log("clicked");
    const leftSide = document.querySelector("#left-side");
    leftSide.classList.toggle("invisable");
  }


  // {} = {id: 0, title: "", date: "", contents: ""}
  // setComponent([{id: 0, title: "", date: "", contents: ""}, ...component]);


  // add note button
  const addNoteButton = () => {
    console.log("clicked");
    // make defult invisable
    const rightSideDefult = document.querySelector("#right-side-defult");
    rightSideDefult.classList.add("invisable");
    // add new note
    setShowEditComponent(true);
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
            {<NoteListPreview />}
            {/* test */}
            {
              component.map((item) => {
                return (
                  <NoteListPreview title={item.title} date={item.date} contents={item.contents}/>
                )
              }
              )
            }
            {/* test */}
          </div>
        </div>
        {/* right side */}
        <div id="right-side">
          <div id="right-side-defult">
            <h1>Select a note, or create a new one.</h1>
          </div>

{/* ADDING COMPONENT HERE */}
          {showEditComponent && <Edit onSave={(item) => {{/*console.log(item);*/} setComponent([...component, item]);}} />}
{/* ADDING COMPONENT HERE */}

        </div>
      </div>
    </div>
  );
}

export default App;
