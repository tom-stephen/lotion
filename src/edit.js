import React from "react";

function Edit(){


    // const message = querySelector("#message");
    window.onload = function() {

        // bold button
        const bold = document.querySelector("#bold");
        bold.addEventListener("click", function() {
            console.log("bold");
            // get the selected text
            var selection = window.getSelection().toString();
          
            // create a new range to contain the selected text
            var range = window.getSelection().getRangeAt(0);
          
            // create a new <strong> element to wrap the selected text
            var strong = document.createElement("strong");
          
            // set the content of the <strong> element to the selected text
            strong.appendChild(document.createTextNode(selection));
          
            // replace the selected text with the <strong> element
            range.deleteContents();
            range.insertNode(strong);
        });

        // font size change selsct menue
        const fontSize = document.querySelector("#font-size");
        fontSize.addEventListener("change", function() {
            // get the selected text
            var selection = window.getSelection().toString();
          
            // create a new range to contain the selected text
            var range = window.getSelection().getRangeAt(0);
          
            // create a new <strong> element to wrap the selected text
            var strong = document.createElement("strong");
          
            // set the content of the <strong> element to the selected text
            strong.appendChild(document.createTextNode(selection));
          
            // replace the selected text with the <strong> element
            range.deleteContents();
            range.insertNode(strong);
        });
        }


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
                <select id="font-size">
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