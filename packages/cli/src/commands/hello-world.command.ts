import { z } from 'zod';
import { createCommand } from '../utils/createCommand';

// pnpm run cli hello-world --name World
const schema = z.object({
  name: z.string(),
});

type Schema = z.infer<typeof schema>;
const { handler, describe, builder, command } = createCommand<Schema>(
  'hello-world',
  {
    describe: 'Prints hello world',
    builder: {
      name: {
        validator: z.string().optional(),
        default: 'world',
        type: 'string',
      },
    },
    handler: async ({ name }) => {
      console.log(`Hello ${name}!`);
    },
  }
);

export { handler, describe, builder, command };
