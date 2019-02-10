import minimist from 'minimist';
import chalk from 'chalk';
import flattenDeep from 'lodash.flattendeep';

import { CONTEXT, ACTION, STATUS } from '~const';
import getHelp from './getHelp';

const { _: query, ...options } = minimist(process.argv.slice(2));

const validateContext = (currentContext) => {
  const contextIndex = flattenDeep(Object.values(CONTEXT))
    .findIndex(context => context === currentContext);
  if (currentContext === undefined || contextIndex >= 0) {
    return currentContext;
  }
  console.log(chalk.red(`Specified context is not available: "${currentContext}"`));
  return process.exit(STATUS.CANNOT_EXECUTE);
};

const validateAction = (currentAction) => {
  const actionIndex = flattenDeep(Object.values(ACTION))
    .findIndex(action => action === currentAction);
  if (currentAction === undefined || actionIndex >= 0) {
    return currentAction;
  }
  console.log(chalk.red(`Specified action is not available: "${currentAction}"`));
  return process.exit(STATUS.CANNOT_EXECUTE);
};

/*
 * @NOTE This assumes the action is already validated
 */
const normalizeActionAlias = (currentAction) => {
  const actionKeys = Object.keys(ACTION);
  for (let i = 0; i < actionKeys.length; i += 1) {
    if (ACTION[actionKeys[i]].findIndex(action => action === currentAction) >= 0) {
      return ACTION[actionKeys[i]][0];
    }
  }
  return currentAction;
};

export const getQuery = () => {
  const context = validateContext(query[0]);
  const action = validateAction(query[1]);
  if (!context) {
    console.log(`${chalk.yellow('You need to select the <context> in which to run')}
`);
    getHelp();
    return process.exit(STATUS.NOT_FOUND);
  }
  if (!action) {
    console.log(`${chalk.yellow('You need to select the <action> which should run in the <context>')}
`);
    getHelp();
    return process.exit(STATUS.NOT_FOUND);
  }
  return {
    context,
    action: normalizeActionAlias(action),
    /*
     * @TODO Validate query selector (eg: Id, Id range, ensName)
     */
    selector: query[2],
  };
};

export const getOptions = () => options;
