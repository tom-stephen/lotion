import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


function Edit(props){
    const {onSave} = props;
    // make a new state for the current note
    const [current, setCurrent] = useState({id: 0, title: "", date: "", contents: ""});

    const saveNote = () => {
        onSave(current);
        console.log("save");
    }

    const deleteNote = () => {
        console.log("delete");
    }

    // console.log(current);

    return(
        <>
            {/* bar to put title in */}
            <div id="note-header-box">
                <div id="note-title-box">
                <input id="note-title" type="text" placeholder="Untitled" onChange={(e) => setCurrent((prev) => ({...prev, title: e.target.value}))}></input>
                <input id="note-date" type="datetime-local" onChange={(e) => setCurrent((prev) => ({...prev, date: e.target.value}))}/>
                </div>

                <div id="note-header-buttons">
                <button id="save" onClick={saveNote}>Save</button>
                <button id="delete" onClick={deleteNote}>Delete</button>
                </div>
            </div>

            {/* making note tools */}
            <div id="note-input-container">
                {/* <textarea id="note-contents" placeholder="Type here..." rows="4" cols="50" onChange={(e) => setCurrent((prev) => ({...prev, contents: e.target.value}))}></textarea> */}
                <ReactQuill id="note-contents" placeholder="Type here..." onChange={(e) => setCurrent((prev) => ({...prev, contents: e}))}/>
            </div>
        </>

    )
}

export default Edit;