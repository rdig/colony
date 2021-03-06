import chalk from 'chalk';
import { version } from '../../package.json';

import {
  CONTEXT,
  CONTEXT_HELP,
  ACTION,
  ACTION_HELP,
} from '~const';
import { getHelpTable } from './tables';

const header = () => console.log(`Colony Terminal Client, ${chalk.dim(`version ${version}`)}`);

const usage = () => console.log(`
Usage: colony <context> <action>`);

const context = () => {
  const allContexts = Object.keys(CONTEXT);
  const table = getHelpTable(allContexts.map(key => [
    CONTEXT[key],
    CONTEXT_HELP[key],
  ]));
  return console.log(`
Context(s):

${table}`);
};

const actions = () => {
  const allActions = Object.keys(ACTION);
  const table = getHelpTable(allActions.map(key => [
    ACTION[key],
    ACTION_HELP[key],
  ]));
  return console.log(`
Action(s):

${table}`);
};

const examples = () => {
  const table = getHelpTable([
    [
      chalk.dim('List all available Network colonies:'),
      chalk.reset('colony network list'),
    ],
    [
      chalk.dim('Count all Network colonies:'),
      chalk.reset('colony network count'),
    ],
  ]);
  return console.log(`
Example(s):

${table}`);
};

const getHelp = () => {
  header();
  usage();
  context();
  actions();
  examples();
};

export default getHelp;
