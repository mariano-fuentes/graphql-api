export const typeDefs = {
  queries: `
    product(id: ID!): Product
    products(filter: ProductsFilterInput): [Product!]!
  `,
  product: `
    type Product {
      id: ID!
      name: String!
      description: String!
      quantity: Int!
      price: Float!
      onSale: Boolean
      image: String
      categories: [Category!]!
      reviews: [Review]!
    }
  `,
};
