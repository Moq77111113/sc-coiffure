import { promises as fs } from 'fs';
import { dataSchema, type Data } from '~//types/data';
import type { Reviews } from '~//types/google/review';
import type { Posts } from '~//types/instagram/post';

export async function updateData<
  Path extends keyof Data,
  Value = Path extends 'reviews' ? Reviews : Posts
>(path: Path, value: Value) {
  try {
    // Read the JSON data from the file
    const data = await fs
      .readFile('./dist/data.json', 'utf-8')
      .catch((_) => null);

    const parsedData = safeParse(data);

    // Update the specified key
    const encoded = Buffer.from(JSON.stringify(value)).toString('base64');

    parsedData[path] = encoded;

    // Write the updated JSON data back to the file
    await fs.writeFile('./dist/data.json', JSON.stringify(parsedData, null, 2));
  } catch (error) {
    console.error('Error updating data:', error);
  }
}

const safeParse = (data: string | null): Data => {
  try {
    if (!data) {
      throw new Error('No data found');
    }
    return dataSchema.parse(JSON.parse(data));
  } catch {
    return {
      reviews: '',
      posts: '',
    };
  }
};
