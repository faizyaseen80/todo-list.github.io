import React, { useState, useEffect } from "react";
import NoteItems from "./NoteItems";

const AddNotes = () => {

  // set states
  const [note, setNote] = useState({ title: "", description: "" });
  const [allNotes, setAllNotes] = useState([])

  // handle the add notes
  const handleclick = (e) => {
    e.preventDefault();
    localStorage.setItem(note.title, note.description);
    setNote({ title: "", description: "" });
    // view notes after the add notes without refresh page
    setAllNotes(getAllNotes())
  };

  // update the state of note object
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  // get all notes 
  useEffect(() => {
    setAllNotes(getAllNotes())
  
  }, [])
  

  const getAllNotes = () => {
    const notes = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      notes.push({ title: key, description: value });
    }
    return notes;
  };

  // delete the note from the localstorage
  const removeNotes = (title) =>{
    // filter notes by unique key
    const filterNote = allNotes.filter((note) => note.title !== title)
    // set all notes after delete note
    setAllNotes(filterNote)
    // delete note 
    localStorage.removeItem(title)
  }


  return (
    <>
      <form className="w-50 p-5 m-auto">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            name="title"
            value={note.title}
            onChange={onChange}
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleclick}disabled={note.title.length<3 || note.description.length<5}>
          Add Note
        </button>
      </form>

      {/* render a Note component for each note using map */}
      <div className="w-50 m-auto p-5 d-flex gap-3 flex-wrap">{
        allNotes.map(( note) => { return<NoteItems key={note.title} title={note.title} description={note.description} removeNotes={removeNotes}/>})
      }</div>
    </>
  );
};

export default AddNotes;
