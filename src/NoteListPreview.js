import React from "react";

function NoteListPreview({title, date, contents}){

    return (
        <div id="note-prev-box">
            <h3>{title}</h3>
            <p>{date}</p>
            <div dangerouslySetInnerHTML={{__html: contents}}></div>

        </div>
    );
    }

export default NoteListPreview;