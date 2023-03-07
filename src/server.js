import server from './graphql/index.js';
import { startStandaloneServer } from '@apollo/server/standalone';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const CATEGORIES = require('../db/json/CATEGORIES.json');
const PRODUCTS = require('../db/json/PRODUCTS.json');
const REVIEWS = require('../db/json/REVIEWS.json');

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      PRODUCTS,
      CATEGORIES,
      REVIEWS,
    };
  },
  listen: { port: 4000 },
});

console.log('Server ready at: ' + url);
