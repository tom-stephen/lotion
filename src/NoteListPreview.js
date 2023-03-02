import React from "react";
import { NavLink } from "react-router-dom";

function NoteListPreview({title, date, contents, id}){
    // make a varible called short_content and make it be the first 15 ish words from the contents
    // const short_content = contents.split(" ").slice(0, 15).join(" ");

    return (
        <NavLink to={`/notes/${id}/edit`}>

        <div id="note-prev-box">
            <h3>{title}</h3>
            <p>{date}</p>
            <div dangerouslySetInnerHTML={{__html: contents}}></div>

        </div>
        </NavLink>
    );
    }

export default NoteListPreview;