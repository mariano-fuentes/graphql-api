import { Query } from '../resolvers/Query.js';
import { Category } from '../resolvers/Category.js';
import { Product } from '../resolvers/Product.js';
import { Mutation } from '../resolvers/Mutation.js';
//import { Review } from './Review.js';

export const resolvers = {
  Query,
  Category,
  Product,
  Mutation,
  Review: {},
};
