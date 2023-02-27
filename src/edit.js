import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


function Edit(props){
    // make a new state for the current note
    const [current, setCurrent] = useState({id: 0, title: "", date: "", contents: ""});

        // bold button (DOES NOT WORK)
        const bold = () => {
            console.log("bold");
            var selection = window.getSelection().toString();
            var range = window.getSelection().getRangeAt(0);
            var strong = document.createElement("strong");
            strong.appendChild(document.createTextNode(selection));
            range.deleteContents();
            range.insertNode(strong);
        }

        // italic button (DOES NOT WORK)
        const italic = () => {
            console.log("italic");
            var selection = window.getSelection().toString();
            var range = window.getSelection().getRangeAt(0);
            var strong = document.createElement("strong");
            strong.appendChild(document.createTextNode(selection));
            range.deleteContents();
            range.insertNode(strong);
        }

        // underline button (DOES NOT WORK)
        const underline = () => {
            console.log("underline");
            var selection = window.getSelection().toString();
            var range = window.getSelection().getRangeAt(0);
            var strong = document.createElement("strong");
            strong.appendChild(document.createTextNode(selection));
            range.deleteContents();
            range.insertNode(strong);
        }

        // link button (DOES NOT WORK)
        const link = () => {
            console.log("link");
            var selection = window.getSelection().toString();
            var range = window.getSelection().getRangeAt(0);
            var strong = document.createElement("strong");
            strong.appendChild(document.createTextNode(selection));
            range.deleteContents();
            range.insertNode(strong);
        }

        // bullet list button (DOES NOT WORK)
        const bulletList = () => {
            console.log("bullet list");
            var selection = window.getSelection().toString();
            var range = window.getSelection().getRangeAt(0);
            var strong = document.createElement("strong");
            strong.appendChild(document.createTextNode(selection));
            range.deleteContents();
            range.insertNode(strong);
        }

        // number list button (DOES NOT WORK)
        const numberList = () => {
            console.log("number list");
            var selection = window.getSelection().toString();
            var range = window.getSelection().getRangeAt(0);
            var strong = document.createElement("strong");
            strong.appendChild(document.createTextNode(selection));
            range.deleteContents();
            range.insertNode(strong);
        }

        // font size change selsct menue (DOES NOT WORK)
        const fontSize = () => {
            // get the selected text
            var selection = window.getSelection().toString();
            var range = window.getSelection().getRangeAt(0);
            var strong = document.createElement("strong");
            strong.appendChild(document.createTextNode(selection));
            range.deleteContents();
            range.insertNode(strong);
        }

        const saveNote = () => {
            console.log("save");
        }

        const deleteNote = () => {
            console.log("delete");
        }

    console.log(current);

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
            {/* <div id="note-tools">
                <select id="font-size" onChange={fontSize}>
                    <option value="1" id="size-normal">normal</option>
                    <option value="2" id="size-subheader">Subheader</option>
                    <option value="3" id="size-header">Header</option>
                </select>
                <button id="bold" onClick={bold}>B</button>
                <button id="italic" onClick={italic}>I</button>
                <button id="underline" onClick={underline}>U</button>
                <button id="link" onClick={link}>&#128279;</button>
                <button id="bulleted-list" onClick={bulletList}>Bulleted List</button>
                <button id="numbered-list" onClick={numberList}>Numbered List</button>
            </div> */}
            <div id="note-input-container">
                {/* <textarea id="note-contents" placeholder="Type here..." rows="4" cols="50" onChange={(e) => setCurrent((prev) => ({...prev, contents: e.target.value}))}></textarea> */}
                <ReactQuill id="note-contents" placeholder="Type here..." onChange={(e) => setCurrent((prev) => ({...prev, contents: e}))}/>
            </div>
        </>

    )
}

export default Edit;