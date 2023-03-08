{/* TEST 1: display preview or edit */}
// {!editMode ? (
//     <div
//       id="view-content"
//       dangerouslySetInnerHTML={{ __html: current.contents }}
//     ></div>) : (
//     <>
//       <div id="note-header-box">
//         <div id="note-title-box">
//           <input
//             id="note-title"
//             type="text"
//             placeholder="Untitled"
//             value={current ? current.title : ""}
//             onChange={(e) =>
//               setCurrent((prev) => ({ ...prev, title: e.target.value }))
//             }
//           ></input>
//           <input
//             id="note-date"
//             type="datetime-local"
//             onChange={(e) =>
//               setCurrent((prev) => ({
//                 ...prev,
//                 date: formatDate(e.target.value),
//               }))
//             }
//           />
//         </div>
//       </div>
//       <div id="note-input-container">
//         <ReactQuill
//           id="note-contents"
//           placeholder="Type here..."
//           value={current ? current.contents : ""}
//           onChange={(e) => setCurrent((prev) => ({ ...prev, contents: e }))}
//         />
//       </div> 
//     </>
//   )}

//   </div>
// ) : null}