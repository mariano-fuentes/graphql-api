import * as fs from 'fs/promises';
import { readAndTransformJson } from './readAndTransformJson.js';

export async function writeContentToDB(newContent, contentType) {
  let response = null;
  try {
    const content = JSON.stringify(newContent);
    const location = `../backend-apollo/db/json/${contentType.toUpperCase()}.json`;
    await fs.writeFile(location, content);
    response = {
      success: true,
      message: `${contentType} have been saved succesfully in the DB`,
    };
  } catch (err) {
    response = err;
  }

  return response;
}
