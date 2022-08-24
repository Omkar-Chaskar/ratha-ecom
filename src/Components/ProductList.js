import "../styles.css";
import { useFilter } from "../context/filter-provider";
import { useAuth } from "../context";
import { Toaster } from "react-hot-toast";
import { Product } from "./index";

export default function ProductList() {
  const { user } = useAuth();
  const { loginStatus } = user;
  const { productsList: filteredProduct } = useFilter();

  return (
    <div>
      <div className="main-header-container flex">
        <h5 className="main-header">Showing All Product</h5>
        <p className="p1 main-product-count">
          ( Showing <span id="product-count">{filteredProduct.length}</span>{" "}
          products )
        </p>
      </div>
      <ul className="product-container">
        {filteredProduct.map((product) => {
          return (
            <Product product={product} key={product._id} loginStatus={loginStatus}/>
          );
        })}
      </ul>
      <Toaster position="bottom-right" reverseOrder={true} />
    </div>
  );
}
