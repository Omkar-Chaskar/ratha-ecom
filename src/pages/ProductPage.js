import "../styles.css";
import {Filter ,ProductList } from "../Components/index";
import { Toaster } from "react-hot-toast";

export default function ProductPage() {
  return (
    <div className="Product-page">
      <section className="filter">
        <div className="filter-container">
          <Filter />
        </div>
      </section>
      <section className="main">
        <ProductList />
      </section>
      <Toaster position="bottom-right" reverseOrder={true} />
    </div>
  );
}
