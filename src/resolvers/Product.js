export const Product = {
  categories: ({ categoryId: productCategoryId }, args, { CATEGORIES }) => {
    const productCategories = CATEGORIES.filter(
      (category) => category.id === productCategoryId
    );
    return productCategories;
  },
  reviews: ({ id: productId }, __, { REVIEWS }) => {
    const reviews = REVIEWS.filter((review) => review.productId === productId);
    return reviews;
  },
};
