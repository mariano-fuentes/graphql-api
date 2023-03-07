export const Category = {
  products: ({ id: categoryId }, args, { PRODUCTS }) => {
    const productsByCategory = PRODUCTS.filter(
      (product) => product.categoryId === categoryId
    );
    return productsByCategory;
  },
};
