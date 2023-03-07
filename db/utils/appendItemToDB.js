import * as fs from 'fs/promises';
import { readAndTransformJson } from './readAndTransformJson.js';

export async function appendItemToDB(item, contentType) {
  let response;
  try {
    const location = `../backend-apollo/db/json/${contentType.toUpperCase()}.json`;
    let data = readAndTransformJson(contentType);

    await fs.appendFile(location, item);
    response = {
      success: true,
      message: `Item for ${contentType} databse has been saved succesfully.`,
    };
  } catch (err) {
    response = err;
  }

  return response;
}
