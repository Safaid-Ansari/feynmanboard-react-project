import "../styles/Header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      {/* <Link to="/"> */}
      <Link to="/dashboard" title="home page">
        <img
          className="header__icon"
          src="https://images.yourstory.com/cs/images/companies/16162243490201-1631082089969.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"
          alt="wasserstoff logo"
        />
      </Link>
      <h3 className="heading3">wasserstoff</h3>
      {/* </Link> */}
      <div className="innerSpan">
        <span>
          <Link to="/signup" title="sign-up">
            SignUp{" "}
          </Link>
        </span>
        <span>
          <Link to="/login" title="sign-in">
            Login{" "}
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
