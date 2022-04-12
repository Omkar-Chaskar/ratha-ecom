import { useNavigate, Link } from "react-router-dom";
import "../styles.css";
import { useCategory } from "../context/category-provider";
import { useFilter } from "../context/filter-provider";

export default function CatagoriesCard() {
  const { category } = useCategory();
  const { dispatch } = useFilter();
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <ul className="home-catagory flex flex-row ">
      {category.map(({ _id, categoryName, categoryImg }) => {
            return (
              <li
                key={_id}
                onClick={() => {
                  dispatch({
                    type: "FILTER_BY_CATEGORY",
                    payload: categoryName
                  });
                  navigate("ProductPage");
                }}
              >
                <div className="cust-card">
                  <div className="card__media-column ">
                    <img
                      className="card-img"
                      src={categoryImg}
                      alt="product-img"
                    />
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
