import { v4 as uuidv4 } from 'uuid';
import { addNewItem } from '../../db/utils/addNewItem.js';

export const Mutation = {
  AddCategory: (_, { input: { name: name } }, ___) => {
    const newCategory = {
      id: uuidv4(),
      name,
    };

    const saveNewCategory = async () => {
      const result = await addNewItem(newCategory, 'categories');
      if (result.success) {
        return newCategory;
      } else {
        throw new Error(result);
      }
    };

    return saveNewCategory();
  },
  AddProduct: (_, { input }, ___) => {
    const { name, description, quantity, price, onSale, image, categories } =
      input;

    const newProduct = {
      id: uuidv4(),
      name,
      description,
      quantity,
      price,
      onSale,
      image,
      categories: categories ? categories : [],
    };

    const saveNewProduct = async () => {
      const result = await addNewItem(newProduct, 'products');
      if (result.success) {
        return newProduct;
      } else {
        throw new Error(result);
      }
    };

    return saveNewProduct();
  },
};
