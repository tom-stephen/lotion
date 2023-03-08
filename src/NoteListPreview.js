import React from "react";
import { NavLink } from "react-router-dom";

function NoteListPreview({title, date, contents, id}){
    // make a varible called short_content and make it be the first 15 ish words from the contents
    // const short_content = contents.split(" ").slice(0, 15).join(" ");
    
    // make a varible called short_content and make it be the first 15 ish words from the contents
    const wordsArray = contents.split(" ");
    const first15WordsArray = wordsArray.slice(0, 15);
    const first15WordsString = first15WordsArray.join(" ");

    // make the title "untitles" if there is no title
    if (title === "") {
        title = "Untitled";
    }

    const defult_invisable = () => {
        const rightSideDefult = document.querySelector("#right-side-defult");
        rightSideDefult.classList.add("invisable");
    }
    return (
        <NavLink to={`/notes/${id}`} onClick={defult_invisable}>
            <div id="note-prev-box">
                <h3>{title}</h3>
                <p>{date}</p>
                <div dangerouslySetInnerHTML={{__html: first15WordsString}}></div>
            </div>
        </NavLink>
    );
    }

export default NoteListPreview;