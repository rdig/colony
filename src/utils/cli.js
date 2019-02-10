import minimist from 'minimist';
import chalk from 'chalk';

import { CONTEXTS } from '~const';

const { _: query, ...options } = minimist(process.argv.slice(2));

const validateContext = (context) => {
  const contextIndex = CONTEXTS.findIndex(currentContext => currentContext === context);
  if (contextIndex >= 0) {
    return context;
  }
  throw new Error(chalk.red(`Specified context is not available: "${context}"`));
};

export const getQuery = () => ({
  context: validateContext(query[0]),
  action: query[1],
  selector: query[2],
});

export const getOptions = () => options;
