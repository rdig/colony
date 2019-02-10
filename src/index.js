import networkClient from './networkClient';
import chalk from 'chalk';

import { asyncCall, getQuery } from '~utils';
import { CONTEXT, ACTION } from '~const';

const mainProcess = async () => {
  const { context, action } = getQuery();
  const networkClientInstance = await networkClient();
  switch (context) {
  case CONTEXT.NETWORK: {
    const { count: coloniesCount } = await asyncCall(
      networkClientInstance.getColonyCount,
      'Loading Colonies',
    );
    switch (action) {
    case (ACTION.LIST[0]): {
      for (let i = 1; i <= coloniesCount; i += 1) {
        const { address: currentColonyAddress } = await asyncCall(
          () => networkClientInstance.getColony.call({ id: i }),
          `Loading Colony Id ${chalk.dim(i)}`,
        );
        const { version: currentColonyVersion } = await asyncCall(
          networkClientInstance.getCurrentColonyVersion,
          `Loading Colony Id ${chalk.dim(i)}`,
        );
        console.log(
          chalk.green('id'),
          i,
          chalk.green('address'),
          `${chalk.dim('0x')}${currentColonyAddress.slice(2)}`,
          chalk.green('v'),
          currentColonyVersion,
        );
      }
      return null;
    }
    case (ACTION.COUNT[0]): {
      return console.log(
        chalk.dim('Number of colonies in the Network:'),
        coloniesCount,
      );
    }
    default: {
      return console.log(chalk.red('No <action> output! Something went terribly wrong...'));
    }
    }
  }
  default: {
    return console.log(chalk.red('No <context> output! Something went terribly wrong...'));
  }
  }
};

mainProcess().then(process.exit);
