# CLI


Welcome to the SC-CLI Project!


## Overview

This is a command-line interface (CLI) application built with Node.js and yargs.

## Usage 

```bash
    pnpm start command:name arg1 foo arg2 bar
```

### Example

```bash
    pnpm start hello-world --name World
```


## Getting Started

1. Create a command file in the `src/commands` directory

```bash
mkdir src/commands/new-command.command.ts
```

2. Use the create command utility to define you command

```ts
import { z } from 'zod';
import { createCommand } from '../utils/createCommand';

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

```


3. Run the command by using the command name 

```bash
    pnpm start hello-world name "John Doe"
```