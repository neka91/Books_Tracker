import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="header__item">
        <img className="header__item_logo" src={props.logo} alt="Logo" />
        <h1 className="header__item_title">Books Tracker</h1>
      </div>
      <nav className="header__nav">
        <NavLink className="header__nav_link" to="/home">
          Home
        </NavLink>
        <NavLink className="header__nav_link" to="/add-new-book">
          Add new book
        </NavLink>
        <NavLink className="header__nav_link" to="/my-list">
          My list
        </NavLink>
        <NavLink className="header__nav_link" to="/search">
          Search
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
