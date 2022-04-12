const Compose = (state, ...functions) => (productList) =>
  functions.reduce((acc, cur) => cur(state, acc), productList);

const filterSortBy = (state, productList) => {
  switch (state.sort) {
    case "LOW_TO_HIGH":
      return [...productList].sort((a, b) => Number(a.price) - Number(b.price));
    case "HIGH_TO_LOW":
      return [...productList].sort((a, b) => Number(b.price) - Number(a.price));
    default:
      return productList;
  }
};

const categoryFilter = (state, productList) => {
  const categoriesPresent = Object.keys(state.category).filter(
    (value) => state.category[value] === true
  );
  if (categoriesPresent.length === 0) return productList;
  return productList.filter((product) =>
    categoriesPresent.includes(product.categoryName)
  );
};

const ratingsFilter = (state, productList) => {
  switch (state.rating) {
    case "FourAndAbove":
      return [...productList].filter((item) => item.rating >= 4);
    case "ThreeAndAbove":
      return [...productList].filter((item) => item.rating >= 3);
    case "TwoAndAbove":
      return [...productList].filter((item) => item.rating >= 2);
    case "OneAndAbove":
      return [...productList].filter((item) => item.rating >= 1);
    default:
      return productList;
  }
};

const filterPrice = (state, productList) => {
  if (state.filterByPrice.end === 1) return productList;
  return productList.filter(
    (product) =>
      product.price > state.filterByPrice.start &&
      product.price < state.filterByPrice.end
  );
};

export { Compose, filterSortBy, categoryFilter, ratingsFilter, filterPrice };
