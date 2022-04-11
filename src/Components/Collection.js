import { Link } from "react-router-dom";
import "../styles.css";

export default function Collection() {
  return (
    <div>
      <section className="home-collection-container flex">
        <div className="card">
          <Link to="ProductPage">
            <div className="product-link">
              <div className="card__primary-action card__primary-action-row">
                <div className="card__media-row card__media-row-resp">
                  <img
                    className="card-img"
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="card__primary card-hover">
                  <h2 className="card__title">Summer Collection</h2>
                  <p className="card__subtitle">
                    Check out our best winter collection to stay cool in style
                    this season
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="ProductPage">
            <div className="product-link">
              <div className="card__primary-action card__primary-action-row">
                <div className="card__media-row card__media-row-resp">
                  <img
                    className="card-img"
                    src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="card__primary card-hover">
                  <h2 className="card__title">Winter Collection</h2>
                  <p className="card__subtitle">
                    Check out our best winter collection to stay warm in style
                    this season
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
