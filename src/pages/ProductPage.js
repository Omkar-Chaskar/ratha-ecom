import "../styles.css";
import {Filter ,Product } from "../Components/index";
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
        <Product />
      </section>
      <Toaster position="bottom-right" reverseOrder={true} />
    </div>
  );
}
