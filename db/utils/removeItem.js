import { readAndTransformJson } from './readAndTransformJson.js';
import { writeContentToDB } from './addDBContent.js';

export async function removeItem(id, contentType) {
  try {
    const data = await readAndTransformJson(contentType);
    if (data.errno) {
      throw Error(data);
    }
    const filteredData = data.filter((item) => item.id != id);
    const result = await writeContentToDB(filteredData, contentType);
    return result;
  } catch (err) {
    return err;
  }
}
