export const typeDefs = `#graphql
  type Query {
    product(id: ID!): Product
    products(filter: ProductsFilterInput): [Product!]!
    categories: [Category!]!
    category(id: ID!): Category
    review(id: ID!): Review
    reviews: [Review!]!
  }

  type Mutation {
    AddCategory(input: AddCategoryInput): Category
    AddProduct(input: AddProductInput): Product
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

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

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }

  input ProductsFilterInput {
    onSale: Boolean,
    quantity: Int
  }

  input AddCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean
    image: String
    categories: AddCategoryInput
  }

`;
