import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Edit from './Edit';
import NoteListPreview from './NoteListPreview';
import { Outlet } from "react-router-dom";

function App() {
  // list of notes
  const [note, setNote] = useState([]);
  // every time note changes, save it to local storage
  

  useEffect(() => {
    // retrieve array from local storage on component mount
    const storedArray = localStorage.getItem('note');
    if (storedArray) {
      setNote(JSON.parse(storedArray));
    }
  }, []);

  useEffect(() => {
    // save array to local storage on component update
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  console.log(note);
  // show edit component
  const [showEditComponent, setShowEditComponent] = useState(false);

  const navigate = useNavigate();

  // hamberger menue
  const hamberger = () => {
    console.log("clicked");
    const leftSide = document.querySelector("#left-side");
    leftSide.classList.toggle("invisable");
  }

  // find index of item based of ID
  const findIndex = (item) => {
    return note.findIndex((i) => i.id === item.id);
  }

  // generate ID
  const generateID = () => {
    return Math.floor(Math.random() * 1000000000);
  }

  const onSave =(item) => {
    if (findIndex(item) === -1)
      setNote([...note, item]);
    else {
      const replaceList = [...note];
      const index = findIndex(item);
      replaceList[index] = item;
      setNote(replaceList);
    }
  }


  // add note button
  var id;
  const addNoteButton = () => {
    console.log("clicked");
    // make defult invisable
    const rightSideDefult = document.querySelector("#right-side-defult");
    rightSideDefult.classList.add("invisable");
    // add new note
    setShowEditComponent(true);
    id = generateID();
    navigate(`/notes/${id}/edit`)
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
              note.map((item) => {
                return (
                  <NoteListPreview id={item.id} title={item.title} date={item.date} contents={item.contents}/>
                )
              })
            }
            {/* test */}
          </div>
        </div>
        {/* right side */}
        <div id="right-side">
          <div id="right-side-defult">
            <h1>Select a note, or create a new one.</h1>
          </div>
          <Outlet  context={[note, onSave]}/>

{/* ADDING COMPONENT HERE */}
          {/* {showEditComponent && <Edit id={id}
                                      title="Untitled" 
                                      date='0000-00-00' 
                                      contents='Add text here...' 
                                      onSave={(item) => {
                                        if (findIndex(item) === -1)
                                          setNote([...note, item]);
                                        else {
                                          const replaceList = [...note];
                                          const index = findIndex(item);
                                          replaceList[index] = item;
                                          setNote(replaceList);
                                        }
                                      }
                                      }
                                      onDelete={(item) => {
                                        const updateList = [...note]; 
                                        const index = findIndex(item); 
                                        updateList.splice(index ,1);
                                        setNote(updateList);
                                      }}/>} */}
          {/* {showEditComponent_add && <Edit id={generateID()} 
                                          id = 
                                          title= 
                                          date=  
                                          contents=  
                                          onSave={(item) => {setNote([...note, item]);}} 
                                          onDelete={(item) => {const updateList = [...note];
                                            const index = findIndex(item); 
                                            updateList.splice(index ,1);
                                            setNote(updateList);
                                          }}/>} */}
{/* ADDING COMPONENT HERE */}
                                                                                                  

        </div>
      </div>
    </div>
  );
}

export default App;
