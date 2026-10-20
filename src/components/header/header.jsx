import "./header.scss";

function Header() {
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
          
 <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-1" className="btn drawer-button">Open drawer</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>



        </div>
      </div>
    </div>
  );
}

export default Header;
