function Note(props) {
  return (
    <div>
      <div className="flex text-lg align-center">
        <p className="p-2 text-3xl">{props.rating >= 7 ? "🍅" : "🤢"}</p>
        <p className="p-2 my-2 w-full border-2 border-light rounded-md">
          {props.feedback}
        </p>
      </div>
    </div>
  );
}

export default Note;
