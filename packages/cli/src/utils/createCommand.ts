import { CommandModule, Options } from 'yargs';
import { z, ZodType } from 'zod';

type CommandOption = Pick<Options, 'type' | 'default'> & {
  validator: ZodType<any>;
};

interface CommandOptions<T> {
  /** Description of the command */
  describe: string;
  /**
   * Yargs builder object with zod validation.
   * @example
   * ```ts
   * const builder: {
   *  arg1: {
   *   type: 'string',
   *   default: 'default value',
   *   validator: z.string().min(1),
   * },
   *```
   */
  builder?: Record<string, CommandOption>;
  /**
   * Command handler function.
   * @example
   * ```ts
   * const handler = async (args: { arg1: string }) => {
   *  console.log('Command executed with arguments:', args);
   * }
   * ```
   */
  handler: (args: T) => Promise<void>;
}

export function createCommand<T>(
  command: string,
  { describe, builder, handler }: CommandOptions<T>
): CommandModule {
  return {
    command,
    describe,
    builder: (yargs) => {
      if (!builder) {
        return yargs;
      }
      Object.entries(builder).forEach(([argName, argOptions]) => {
        yargs.option(argName, {
          type: argOptions.type,
          default: argOptions.default,
          coerce: (argValue) => {
            const result = argOptions.validator.safeParse(argValue);
            if (!result.success) {
              throw new Error(result.error.errors[0].message);
            }
            return result.data;
          },
        });
      });
      return yargs;
    },
    handler: async (args) => {
      try {
        await handler(args as T);
      } catch (err) {
        console.error(
          err instanceof Error ? err.message : JSON.stringify(err, null, 2)
        );
        process.exit(1);
      }
    },
  };
}
