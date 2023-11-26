import { promises as fs } from 'fs';
import type { z } from 'zod';
import { dataSchema, type Data, type DataTypes } from '~/types/data';
import { reviewsSchema } from '~/types/google/review';
import { authSchema } from '~/types/instagram/auth';
import { postsSchema } from '~/types/instagram/post';

export async function getData<Path extends keyof Data, Value = Data[Path]>(
  path: Path
): Promise<Value> {
  try {
    // Read the JSON data from the file
    const data = await fs.readFile(import.meta.env.PATH_TO_DATA, 'utf-8');

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
    const parsedValue = resolveData(path, decodedData);

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
    igAuth: '',
  };
};

const pathToResolver = {
  reviews: reviewsSchema,
  posts: postsSchema,
  igAuth: authSchema,
} satisfies Record<keyof Data, z.ZodSchema<DataTypes[keyof Data]>>;

const resolveData = <DataType extends keyof Data>(
  type: DataType,
  value: string
) => pathToResolver[type].parse(JSON.parse(value));
