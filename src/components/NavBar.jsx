import All from "./All";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary p-2">
        <Link className="navbar-brand" to="/all">
          <img
            src="https://reactrouter.com/_brand/react-router-stacked-color.png"
            style={{ width: "100px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/all">
                <strong>ALL</strong>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/fsd">
                <strong>FULL STACK DEVELOPMENT</strong>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/data-science">
                <strong>DATA SCIENCE</strong>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/cyber-security">
                <strong>CYBER SECURITY</strong>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/career">
                <strong>CAREER</strong>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <All />
      <Outlet />
    </div>
  );
};

export default Navbar;
