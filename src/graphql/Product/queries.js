export const queries = {
  products: (_, { filter }, { PRODUCTS }) => {
    if (!filter || Object.keys(filter).length === 0) {
      console.log('all products');
      return PRODUCTS;
    } else {
      const filteredProducts = PRODUCTS.filter((product) => {
        let checkedProduct = true;
        Object.keys(filter).forEach((filterKey) => {
          const itemHasAValue =
            typeof product[filterKey] != 'undefined' &&
            typeof product[filterKey] != 'null';
          if (itemHasAValue) {
            if (product[filterKey] != filter[filterKey]) {
              checkedProduct = false;
            }
          }
        });
        if (checkedProduct) {
          return product;
        }
      });
      console.log('filteredProducts');
      return filteredProducts;
    }
  },
  product: (_, { id }, { PRODUCTS }) => {
    const product = PRODUCTS.find((product) => product.id === id);
    return product;
  },
};
