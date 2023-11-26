import { promises as fs } from 'fs';
import { dataSchema, type Data, type DataTypes } from '~/types/data';

export async function updateData<
  Path extends keyof Data,
  Value = DataTypes[Path]
>(path: Path, value: Value) {
  try {
    // Read the JSON data from the file
    const data = await fs
      .readFile(import.meta.env.PATH_TO_DATA, 'utf-8')
      .catch((_) => null);

    const parsedData = safeParse(data);

    // Update the specified key
    const encoded = Buffer.from(JSON.stringify(value)).toString('base64');

    parsedData[path] = encoded;

    // Write the updated JSON data back to the file
    await fs.writeFile(
      import.meta.env.PATH_TO_DATA,
      JSON.stringify(parsedData, null, 2)
    );
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
      igAuth: '',
    };
  }
};
