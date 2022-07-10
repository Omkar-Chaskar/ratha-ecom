import { Link } from "react-router-dom";
import "../styles.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";
import { useWishlist } from "../context/wishlist-provider";
import { useCart } from "../context/cart-provider";
import { useAuth } from "../context";

export default function Navigation() {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const { logOutHandler, user } = useAuth();
  const { loginStatus } = user;

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
            <Link to={loginStatus ? "WishList" : "Login"}>
              <div className="badge">
                <Badge
                  badgeContent={wishlistState && wishlistState.length}
                  color="error"
                >
                  <FavoriteIcon />
                </Badge>
              </div>
            </Link>
          </li>
          <li className="nav-submenu-sub">
            <Link to={loginStatus ? "MyCart" : "Login"}>
              <div className="badge">
                <Badge
                  badgeContent={cartState && cartState.length}
                  color="error"
                >
                  <ShoppingCartIcon />
                </Badge>
                <span className="material-icons-outlined">cart</span>
              </div>
            </Link>
          </li>
          <li className="nav-submenu-sub">
            {loginStatus ? (
              <p
                className="bold button button-primary p2"
                onClick={(e) => {
                  logOutHandler();
                  cartDispatch({ type: "GET_CART", payload: [] });
                  wishlistDispatch({ type: "GET_WISHLIST", payload: [] });
                }}
              >
                LogOut
              </p>
            ) : (
              <Link to="/Login" className="bold button button-primary p2">
                LogIn
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
