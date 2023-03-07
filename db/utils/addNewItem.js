import { readAndTransformJson } from './readAndTransformJson.js';
import { writeContentToDB } from './addDBContent.js';

export async function addNewItem(newItem, contentType) {
  try {
    const data = await readAndTransformJson(contentType);
    if (data.errno) {
      throw Error(data);
    }
    data.push(newItem);
    const result = await writeContentToDB(data, contentType);
    return result;
  } catch (err) {
    return err;
  }
}
