import "../styles.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useFilter } from "../context/filter-provider";

export default function Product() {

  const { productsList: filteredProduct } = useFilter();

  return (
    <div>
      <div className="main-header-container flex">
        <h5 className="main-header">Showing All Product</h5>
        <p className="p1 main-product-count">
          ( Showing <span id="product-count">{filteredProduct.length}</span> products )
        </p>
      </div>
      <ul className="product-container">
      {filteredProduct.map((products) => {
          return (
            <li className="card-vertical" key={products._id}>
              <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                  <FavoriteBorderIcon />
                </span>
                <div className="card__media-column card__media-column-vertical">
                  <img
                    className="card-img-height"
                    src={products.productImg}
                    alt=""
                  />
                </div>
              </div>
              <div className="card__secondary text-center card__secondary-vertical">
                <p className="p1"> 
                <p className="card__subtitle card-price bold p3">
                &#8377; {products.price}{" "}<span className="card-cut-price">&#8377; {products.orignalPrice}</span>
            </p>
                </p>
                <h3 className="card__subtitle text-center">
                <p className="card__title">
                  {products.subtitle} <br />
                  {products.description}
                  <br />
                </p>
                </h3>
              </div>
              <div className="card__action-buttons text-center">
                  <button
                    className="button button-secondary p1 btn-full bold"
                  >
                    Add To Cart
                  </button>
              </div>
            </li>
            );
          })}
      </ul>
    </div>
  );
}
