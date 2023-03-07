import * as fs from 'fs/promises';

export async function readAndTransformJson(contentType) {
  let data;
  const location = `../backend-apollo/db/json/${contentType.toUpperCase()}.json`;
  try {
    const dataContent = await fs.readFile(location, 'utf8');
    data = JSON.parse(dataContent);
  } catch (err) {
    data = err;
  }

  return data;
}
