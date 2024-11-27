import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Cook Book</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default Header;
