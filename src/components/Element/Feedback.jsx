import CreateArea from "./CreateArea";
import Note from "./Note";
import { useState } from "react";

function Feedback({ feedbacks }) {
  const [notes, setNotes] = useState(feedbacks);

  const [show, setShow] = useState(false);

  let sums = notes.reduce((acc, obj) => {
    return acc + obj.rating;
  }, 0);
  let index = notes.reduce((acc, obj) => {
    return acc + 1;
  }, 0);

  const rate = sums / index;
  const [rating, setRating] = useState(rate);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    setRating((+newNote.rating + rating) / 2);
    console.log(notes);
  }

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={() => setShow(true)}
          className="py-1 w-40 m-2 my-4 bg-purple rounded-md font-semibold"
        >
          Give Feedback 📝
        </button>
      </div>
      {show && <CreateArea onAdd={addNote} />}

      <div className="flex justify-center">
        {" "}
        <p className="bg-button m-2 text-bg p-1 px-2 mx-2 rounded-md font-semibold">
          Rating : {Math.floor(rating)}
        </p>
      </div>

      <div className="flex justify-center">
        <h1 className="bg-button text-bg font-bold text-center text-xl rounded-md p-2 px-3 m-2 my-4">
          Previous Feedback
        </h1>
      </div>

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            rating={noteItem.rating}
            feedback={noteItem.feedback}
          />
        );
      })}
    </div>
  );
}

export default Feedback;
