import { Link } from "react-router-dom";
import "../styles.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/">
        <div className="nav-logo">Ratha</div>
      </Link>
      <div className="nav-menu">
        <ul className="nav-flex-row">
          <li className="nav-menu-sub">
            <input
              className="nav-search"
              type="search"
              name="input-search"
              id="input-search"
              placeholder="Search..."
            />
          </li>
        </ul>
      </div>
      <div className="nav-submenu">
        <ul className="nav-flex-row">
          <li className="nav-submenu-sub">
            <Link to="WishList">
              <div className="badge">
                <Badge badgeContent={4} color="error">
                  <FavoriteIcon />
                </Badge>
              </div>
            </Link>
          </li>
          <li className="nav-submenu-sub">
            <Link to="MyCart">
              <div className="badge">
                <Badge badgeContent={4} color="error">
                  <ShoppingCartIcon />
                </Badge>
                <span className="material-icons-outlined">cart</span>
              </div>
            </Link>
          </li>
          <li className="nav-submenu-sub">
            <Link to="/Login">Log Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
