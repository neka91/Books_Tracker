function BooksList(props) {
  return (
    <div className="bookslist">
      <h2 className="bookslist__item_title">List of books:</h2>
      {props.booksList.length > 0 ? (
        <ul className="bookslist__item_list">
          {props.booksList.map((book) => {
            return (
              <li className="bookslist__item_list_items" key={book.id}>
                <span className="bookslist__item_list_items_info">
                  Title: {book.title}
                  <br />
                  Author: {book.author}
                </span>
                <button
                  className="bookslist__item_list_button"
                  onClick={() => props.onDelete(book.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="bookslist__item_paragraph">No books to show!</p>
      )}
    </div>
  );
}

export default BooksList;
