function Search(props) {
  return (
    <div>
      {" "}
      <input
        className="bookslist__item_text"
        type="text"
        placeholder="Search for a book title here..."
        name="search"
        value={props.searchedValue}
        onChange={props.onChange}
      />
      <br />
      <button className="bookslist__item_button" onClick={props.onSearch}>
        Search
      </button>
      {props.displayFoundBooks ? (
        <ul className="bookslist__item_list">
          {props.foundBooks.map((book) => {
            return (
              <li className="bookslist__item_list_items" key={book.id}>
                <span className="bookslist__item_list_items_info">
                  Title: {book.title}
                  <br />
                  Author: {book.author}
                </span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default Search;
