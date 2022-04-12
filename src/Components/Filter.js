import "../styles.css";
import { useFilter } from "../context/filter-provider";
import { useCategory } from "../context/category-provider";

export default function Filter() {
  const { state, dispatch } = useFilter();
  const { category } = useCategory();

  return (
    <section className="filter">
      <div>
        <div className="filter-header-container">
          <h5 className="filter-header">Filter</h5>
          <button
            className="filter-clear"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            Clear
          </button>
        </div>
        <div className="price-slider-container">
          <h5 className="Price-slider-header">Price</h5>
          <div className="slider-container">
            <input
              name="slider"
              type="range"
              min="1"
              max="1500"
              step="20"
              className="myRange"
              id="price-range"
              onChange={(e) =>
                dispatch({
                  type: "FILTER_BY_PRICE",
                  payload: { start: 1, end: Number(e.target.value) }
                })
              }
            />
            <p className="price-slider-value p2 bolder">
              {state.filterByPrice.end}
            </p>
          </div>
        </div>
        <div className="catagory-container">
          <h5 className="catagory-header">Catagory</h5>
          <ul>
            {category.map(({ _id, categoryName }) => {
              return (
                <li key={_id}>
                  <input
                    type="checkbox"
                    className="catagory-box"
                    name={categoryName}
                    id={_id}
                    value={state.category[categoryName]}
                    checked={state.category[categoryName] ? true : false}
                    onChange={() =>
                      dispatch({
                        type: "FILTER_BY_CATEGORY",
                        payload: categoryName
                      })
                    }
                  />
                  <label htmlFor={_id}>{categoryName}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rating-container">
          <h5 className="rating-header">Rating</h5>

          <label className="input-select">
            <input
              type="radio"
              className="radio-rating"
              name="rating"
              value="FourAndAbove"
              checked={state.rating !== "FourAndAbove" ? false : true}
              onChange={(e) =>
                dispatch({
                  type: "FILTER_BY_RATINGS",
                  payload: e.target.value
                })
              }
            />
            <span>4 stars & above</span>
          </label>
          <br />
          <label className="input-select">
            <input
              type="radio"
              className="radio-rating"
              name="rating"
              value="ThreeAndAbove"
              checked={state.rating !== "ThreeAndAbove" ? false : true}
              onChange={(e) =>
                dispatch({
                  type: "FILTER_BY_RATINGS",
                  payload: e.target.value
                })
              }
            />
            <span>3 stars & above</span>
          </label>
          <br />
          <label className="input-select">
            <input
              type="radio"
              className="radio-rating"
              name="rating"
              value="TwoAndAbove"
              checked={state.rating !== "TwoAndAbove" ? false : true}
              onChange={(e) =>
                dispatch({
                  type: "FILTER_BY_RATINGS",
                  payload: e.target.value
                })
              }
            />
            <span>2 stars & above</span>
          </label>
          <br />
          <label className="input-select">
            <input
              type="radio"
              className="radio-rating"
              name="rating"
              value="OneAndAbove"
              checked={state.rating !== "OneAndAbove" ? false : true}
              onChange={(e) =>
                dispatch({
                  type: "FILTER_BY_RATINGS",
                  payload: e.target.value
                })
              }
            />
            <span>1 stars & above</span>
          </label>
          <br />
        </div>
        <div className="sortby-container">
          <h5 className="sortby-header">Sort By</h5>
          <input
            type="radio"
            id="low-to-high-price"
            className="radio-sort"
            name="sort"
            value="LOW_TO_HIGH"
            checked={state.sort === "LOW_TO_HIGH" ? true : false}
            onChange={(e) =>
              dispatch({ type: "SORT", payload: e.target.value })
            }
          />
          <label htmlFor="low-to-high-price">Price - Low to High</label>
          <br />
          <input
            type="radio"
            id="high-to-low-price"
            className="radio-sort"
            name="sort"
            value="HIGH_TO_LOW"
            checked={state.sort === "HIGH_TO_LOW" ? true : false}
            onChange={(e) =>
              dispatch({ type: "SORT", payload: e.target.value })
            }
          />
          <label htmlFor="high-to-low-price">Price - High to Low</label>
          <br />
        </div>
      </div>
    </section>
  );
}
