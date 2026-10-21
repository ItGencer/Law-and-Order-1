import "./header.scss";
import { useState } from "react";

function Header() {
  const [isMenuIconOpen, setIsMenuIconOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__title">
        <a className="btn btn-ghost text-xl">Law and Order</a>
      </div>
      <div className="header__content">
        <input
          type="text"
          placeholder="Search"
          className="header__content__search"
        />
        <div className="header__content__navbar">
          <div
            className={
              isMenuIconOpen
                ? "header__content__navbar__toggle__button open"
                : "header__content__navbar__toggle__button"
            }
            onClick={() => setIsMenuIconOpen((isOpen) => !isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="header__content__navbar__side">
            <ul
              className={`header__content__navbar__side__menu${
                isMenuIconOpen ? " is-open" : ""
              }`}
            >
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
