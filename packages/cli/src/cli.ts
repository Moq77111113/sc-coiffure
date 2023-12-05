import yargs from 'yargs';
import 'dotenv/config';

yargs(process.argv.slice(2))
  .scriptName('cli')
  .commandDir('commands', {
    recurse: true,
    extensions: ['command.ts'],
    visit: (commandModule) => ({
      ...commandModule,
      handler: async (args: any) => {
        await commandModule.handler(args);
      },
    }),
  })
  .fail((_msg, err) => {
    console.error(err.message);
    process.exit(1);
  })
  .demandCommand()
  .help().argv;
