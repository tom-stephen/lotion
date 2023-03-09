import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useOutletContext, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Edit({ editMode }) {
  const { id } = useParams();
  let currentNote = {};
  const [note, onSave, onDelete] = useOutletContext();
  console.log(note);
  if (!id) {
    console.log("no id");
  } else {
    console.log("id: " + id);
    [currentNote] = note.filter((item) => item.id == id);
    console.log(currentNote);
  }
  const [current, setCurrent] = useState({
    id: null,
    title: "title",
    date: "date",
    contents: "contents",
  });

  const saveNote = () => {
    console.log("save");
    // append the note to the list of notes
    onSave(current);
  };

  const deleteNote = () => {
    console.log("delete");
    // remove the note from the list of notes
    // add a windo allert checking if they accualt want to delete the note
    const confirm = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (confirm) {
      onDelete(current);
    }
  };

  useEffect(() => {
    console.log("current note:", currentNote);
    setCurrent(currentNote);
  }, [id]);

  // format date
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
      return "";
    }
    return formatted;
  };

  return (
    <>
      {/* bar to put title in */}
      {current && current.id && !editMode ? (
        <div id="view-box">
          <div id="view-header">
            <div>
              <h2 id="view-title">{current.title ? current.title : "Untitled"}</h2>
              <p id="view-date">{current.date ? current.date : "no date"}</p>
            </div>
            <div id="note-header-buttons">
              {/* {editMode ? (
                <button id="save" onClick={saveNote}>
                  Save
                </button> */}
              {/* ) : ( */}
              <NavLink id="edit" to={`/notes/${current.id}/edit`}>
                Edit
              </NavLink>
              {/* )} */}

              <button id="delete" onClick={deleteNote}>
                Delete
              </button>
            </div>
          </div>
          {/* display preview or edit */}
          <div
            id="view-content"
            dangerouslySetInnerHTML={{ __html: current.contents }}
          ></div>
        </div>
      ) : null}

      {editMode && (
        <>
          <div id="note-header-box">
            <div id="note-title-box">
              <input
                id="note-title"
                type="text"
                placeholder="Untitled"
                value={current ? current.title : ""}
                onChange={(e) =>
                  setCurrent((prev) => ({ ...prev, title: e.target.value }))
                }
              ></input>
              <input
                id="note-date"
                type="datetime-local"
                onChange={(e) =>
                  setCurrent((prev) => ({
                    ...prev,
                    date: formatDate(e.target.value),
                  }))
                }
              />
            </div>
            <div id="save_del_but">
              <button id="save" onClick={saveNote}>
                Save
              </button>
              <button id="delete" onClick={deleteNote}>
                Delete
              </button>
            </div>
          </div>
          <div id="note-input-container">
            {/* <ReactQuill id="note-contents" placeholder="Type here..." onChange={(e) => setCurrent((prev) => ({...prev, contents: e}))}/> */}
            <ReactQuill
              id="note-contents"
              placeholder="Type here..."
              value={current ? current.contents : ""}
              onChange={(e) => setCurrent((prev) => ({ ...prev, contents: e }))}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Edit;
