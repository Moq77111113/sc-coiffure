import { promises as fs } from 'fs';
import { dataSchema, type Data } from '~/types/data';
import { reviewsSchema, type Reviews } from '~/types/google/review';
import { postsSchema, type Posts } from '~/types/instagram/post';

export async function getData<
  Path extends keyof Data,
  Value = Path extends 'reviews' ? Reviews : Posts
>(path: Path): Promise<Value> {
  try {
    // Read the JSON data from the file
    const data = await fs.readFile('./dist/data.json', 'utf-8');

    // Parse the JSON data into an object
    const parsedData = safeParse(data);

    // Get the encoded data for the specified path
    const encodedData = parsedData[path];

    if (!encodedData) {
      throw new Error(`No data found for path ${path}`);
    }

    // Decode the encoded data
    const decodedData = Buffer.from(encodedData, 'base64').toString('utf-8');

    // Parse the decoded data using the appropriate schema
    const parsedValue =
      path === 'posts'
        ? postsSchema.parse(JSON.parse(decodedData))
        : reviewsSchema.parse(JSON.parse(decodedData));

    return parsedValue as Value;
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
}

const safeParse = (data: string): Data => {
  try {
    const parsedData = JSON.parse(data);
    const result = dataSchema.safeParse(parsedData);

    if (result.success) {
      return result.data;
    }
  } catch (error) {
    console.error('Error parsing data:', error);
  }

  return {
    reviews: '',
    posts: '',
  };
};
