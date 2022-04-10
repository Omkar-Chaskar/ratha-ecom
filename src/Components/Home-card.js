import { Link } from "react-router-dom";
import "../styles.css";

export default function HomeCard() {
  return (
    <div>
      <section className="home-img-card flex">
        <Link to="ProductPage">
          <img
            className="image"
            src="https://images.unsplash.com/photo-1596484552993-aec4311d3381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="squire"
            srcSet=""
          />
        </Link>
      </section>
    </div>
  );
}
