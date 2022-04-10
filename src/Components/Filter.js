import "../styles.css";

const rating = [4, 3, 2, 1];
const category = ["Men" ,"Women" ,"Kids" , "Teens"];

export default function Filter() {

  return (
    <section className="filter">
      <div>
        <div className="filter-header-container">
          <h5 className="filter-header">Filter</h5>
          <button className="filter-clear">Clear</button>
        </div>
        <div className="price-slider-container">
          <h5 className="Price-slider-header">Price</h5>
          <div className="slider-container">
            <input
              type="range"
              min="50"
              max="200"
              defaultValue="150"
              className="slider"
              id="myRange"
            />
            <p className="price-slider-value p2 bolder">150</p>
          </div>
        </div>
        <div className="catagory-container">
          <h5 className="catagory-header">Catagory</h5>
          <ul>
            {category.map((category,index) => {
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    className="catagory-box"
                    name="Men Clothing"
                  />
                  <label>{category}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rating-container">
          <h5 className="rating-header">Rating</h5>
          <ul>
            {rating.map((rating, index) => {
              return (
                <li key={index}>
                  <input
                    type="radio"
                    name="rating"
                    className="rating-radio-btn"
                    id={index}
                  />
                  <label htmlFor={index}>{rating} stars & above</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sortby-container">
          <h5 className="sortby-header">Sort By</h5>
          <input
            type="radio"
            name="sort"
            className="sortby-radio-btn"
            id="low-to-high-price"
          />
          <label htmlFor="rating-four">Price - Low to High</label>
          <br />
          <input
            type="radio"
            name="sort"
            className="sortby-radio-btn"
            id="high-to-low-price"
          />
          <label htmlFor="rating-three">Price - High to Low</label>
          <br />
        </div>
      </div>
    </section>
  );
}
