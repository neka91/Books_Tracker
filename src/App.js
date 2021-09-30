import { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import AddNewBook from "./components/AddNewBook";
import BooksList from "./components/BooksList";
import Search from "./components/Search";
import Footer from "./components/Footer";

import logo from "./images/logo.jpeg";
import homePicture1 from "./images/home_picture1.jpeg";
import homePicture2 from "./images/home_picture2.jpeg";

function App() {
  const initialBooksList = [
    {
      id: 1,
      title: "Atlas Shrugged",
      author: "Ayn Rand",
    },
    {
      id: 2,
      title: "Harry Potter: Deathly Hallows",
      author: "J. K. Rowling",
    },
    {
      id: 3,
      title: "The Why Cafe",
      author: "John Strelecky",
    },
  ];

  const [booksList, setBooksList] = useState(initialBooksList);
  const [searchedValue, setSearchedValue] = useState("");
  const [foundBooks, setFoundBooks] = useState([{}]);
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [displayMessage, setDisplayMessage] = useState({ display: "none" });
  const [displayFoundBooks, setDisplayFoundBooks] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setNewTitle(value);
    } else if (name === "author") {
      setNewAuthor(value);
    } else {
      setSearchedValue(value);
    }
  };

  const handleClickAdd = (event) => {
    event.preventDefault();
    if (newTitle === "" || newAuthor === "") {
      alert("Please fill in title and author information.");
      return;
    }
    const newBook = {
      id: new Date(),
      title: newTitle,
      author: newAuthor,
    };
    setBooksList((prev) => {
      return [...prev, newBook];
    });
    setDisplayMessage({ display: "block" });
    setNewTitle("");
    setNewAuthor("");
  };

  const handleSearch = () => {
    if (searchedValue) {
      setFoundBooks(
        booksList.filter((book) => {
          return book.title.toLowerCase().includes(searchedValue.toLowerCase());
        })
      );
      setDisplayFoundBooks(true);
      setSearchedValue("");
    }
  };

  const handleClickDelete = (id) => {
    setBooksList(() => {
      const updatedBooksList = booksList.filter((book) => {
        return book.id !== id ? book : null;
      });
      return updatedBooksList;
    });
  };

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      handleClickAdd(event);
    }
  };

  return (
    <Router className="App">
      <Header logo={logo} />

      <div className="wrapper">
        <Route path="/home">
          <Home homePicture1={homePicture1} homePicture2={homePicture2} />
        </Route>

        <Route path="/add-new-book">
          <AddNewBook
            newTitle={newTitle}
            newAuthor={newAuthor}
            displayMessage={displayMessage}
            onChange={handleChange}
            onAdd={handleClickAdd}
            onKeyPress={handleKeyPress}
          />
        </Route>

        <Route path="/my-list">
          <BooksList
            booksList={booksList}
            onChange={handleChange}
            onDelete={handleClickDelete}
          />
        </Route>

        <Route path="/search">
          <Search
            foundBooks={foundBooks}
            displayFoundBooks={displayFoundBooks}
            onChange={handleChange}
            onSearch={handleSearch}
          />
        </Route>

        <Redirect from="/" to="/home" />
      </div>

      <Footer />
    </Router>
  );
}

export default App;
