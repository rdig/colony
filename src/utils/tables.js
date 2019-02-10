/* eslint-disable import/prefer-default-export */

import Table from 'cli-table';
import chalk from 'chalk';

import { TABLE_OPTS } from '~const';

export const getHelpTable = (values) => {
  const helpTable = new Table(
    Object.assign(
      {},
      TABLE_OPTS,
      {
        chars: {
          ...TABLE_OPTS.chars,
          left: '  ',
        },
      },
    ),
  );
  helpTable.push(...values.map(value => [
    value[0],
    chalk.dim(value[1]),
  ]));
  return helpTable.toString();
};
