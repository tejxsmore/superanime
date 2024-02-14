import { useState } from "react";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    rating: "",
    feedback: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      rating: "",
      feedback: "",
    });
    event.preventDefault();
  }

  return (
    <div className="flex justify-center m-2">
      <form className="create-note">
        <input
          name="rating"
          type="number"
          onChange={handleChange}
          value={note.rating}
          placeholder="Rating"
          className="p-2 mr-2 w-20 rounded-md text-bg font-semibold focus:outline-none"
        />

        <input
          name="feedback"
          type="text"
          onChange={handleChange}
          value={note.feedback}
          placeholder="Feedback"
          className="p-2 w-40 rounded-md text-bg font-semibold focus:outline-none"
        />

        <button
          className="py-2 ml-2 w-20 bg-purple rounded-md font-medium"
          onClick={submitNote}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
