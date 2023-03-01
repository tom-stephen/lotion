import React from "react";

function NoteListPreview({title, date, contents, id}){
    // make a varible called short_content and make it be the first 15 ish words from the contents
    // const short_content = contents.split(" ").slice(0, 15).join(" ");

    return (
        <a href={`/notes/${id}/edit`}>

        <div id="note-prev-box">
            <h3>{title}</h3>
            <p>{date}</p>
            <div dangerouslySetInnerHTML={{__html: contents}}></div>

        </div>
        </a>
    );
    }

export default NoteListPreview;