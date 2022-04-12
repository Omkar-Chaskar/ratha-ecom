import { Link } from "react-router-dom";
import "../styles.css";

export default function HomeCard() {
  return (
    <div>
      <section className="home-img-card flex">
        <Link to="ProductPage">
          <img
            className="image"
            src="https://img.freepik.com/free-vector/order-now-banner_52683-48697.jpg?t=st=1649279167~exp=1649279767~hmac=da2041a293581706b2fafb11ee7d08a55aa97a950a9a768162fe312215d729ce&w=1380"
            alt="Banner image"
          />
        </Link>
      </section>
    </div>
  );
}
