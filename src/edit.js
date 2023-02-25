import React from "react";

function Edit(){

    // const message = querySelector("#message");
    return(
        <>
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
            <div id="note-input-container">
                {/* <input type="text" id="note-contents" placeholder="Type here..."></input> */}
                <textarea id="note-contents" placeholder="Type here..." rows="4" cols="50"></textarea>

            </div>
        </>

    )
}

export default Edit;