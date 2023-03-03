import React, {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useOutletContext, useParams } from "react-router-dom";

function Edit(){
    // console.log("Edit was rendered");
    const {id} = useParams();
    let currentNote = {}
    const [note, onSave, onDelete] = useOutletContext();
    console.log(note);
    // TODO: check to see if id exists in notes list.
    // make a new state for the current note
    if (!id) {
        console.log("no id");
    } else {
        console.log("id: " + id);
        [currentNote] = note.filter((item) => item.id == id);
        console.log(currentNote)
    }
    const [current, setCurrent] = useState({id: null, title: 'title', date: 'date', contents: 'contents'});

    const saveNote = () => {
        console.log("save");
        // append the note to the list of notes 
        onSave(current);
    }

    const deleteNote = () => {
        console.log("delete");
        // remove the note from the list of notes
        // add a windo allert checking if they accualt want to delete the note
        const confirm = window.confirm("Are you sure you want to delete this note?");
        if(confirm){
            onDelete(current);
        }
    }

    useEffect(()=> {
        console.log("current note:", currentNote);
        setCurrent(currentNote)
    }, [id])

    return(
        <>
            {/* bar to put title in */}
            {current && current.id ? (
            <div id="view-box">
                <h2 id="view-title">{current.title}</h2>
                <p id="view-date">{current.date}</p>
                <div id="view-content" dangerouslySetInnerHTML={{__html: current.contents}}></div>
            </div>
            ) : null }
            <div id="note-header-box">
                <div id="note-title-box">
                <input id="note-title" type="text" placeholder="Untitled" value={current.title} onChange={(e) => setCurrent((prev) => ({...prev, title: e.target.value}))}></input>
                <input id="note-date" type="datetime-local" onChange={(e) => setCurrent((prev) => ({...prev, date: e.target.value}))}/>
                </div>

                <div id="note-header-buttons">
                <button id="save" onClick={saveNote}>Save</button>
                <button id="delete" onClick={deleteNote}>Delete</button>
                </div>
            </div>

            {/* making note tools */}
            <div id="note-input-container">
                {/* <ReactQuill id="note-contents" placeholder="Type here..." onChange={(e) => setCurrent((prev) => ({...prev, contents: e}))}/> */}
                <ReactQuill id="note-contents" placeholder="Type here..." value={current.contents} onChange={(e) => setCurrent((prev) => ({...prev, contents: e}))}/>
            </div>
        </>

    )
}

export default Edit;