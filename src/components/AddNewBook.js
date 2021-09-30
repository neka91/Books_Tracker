function AddNewBook(props) {
  return (
    <form className="form">
      <p className="form__item_title">
        Type information of a book you would like to read:
      </p>
      <br />
      <input
        className="form__item_text"
        type="text"
        placeholder="Title"
        name="title"
        value={props.newTitle}
        onChange={props.onChange}
      />
      <br />
      <input
        className="form__item_text"
        type="text"
        placeholder="Author"
        name="author"
        value={props.newAuthor}
        onChange={props.onChange}
      />
      <br />
      <button
        className="form__item_button"
        onClick={props.onAdd}
        onKeyPress={props.onKeyPress}
      >
        Add
      </button>
      <p style={props.displayMessage} className="form__item_paragraph">
        Book has been added to your list!
      </p>
    </form>
  );
}

export default AddNewBook;
