import chalk from 'chalk';

const log = (...msg) => console.log(
  chalk.green(`[${new Date().toLocaleString()}]`),
  ...msg,
);

log('Hello you!');
