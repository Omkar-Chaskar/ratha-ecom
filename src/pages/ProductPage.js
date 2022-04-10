import "../styles.css";
import Filter from "../Components/Filter";
import Product from "../Components/Product";

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
    </div>
  );
}
