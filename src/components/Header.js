import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="header-logo" to="/">
        <img src={logo} alt="logo" className="header-logo-img" />
        Cook Book
      </Link>
      <Link className="header-favorite" to="/favorites">
        Favorites
      </Link>
    </div>
  );
};

export default Header;
