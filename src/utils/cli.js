import minimist from 'minimist';

const { _: query, ...options } = minimist(process.argv.slice(2));

export const getQuery = () => ({
  context: query[0],
  action: query[1],
  selector: query[2],
});

export const getOptions = () => options;
