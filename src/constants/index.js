export const RINKEBY = 'rinkeby';

export const CONTEXT = {
  NETWORK: 'network',
  /*
   * @TODO To be implemented
   */
  // COLONY: 'colony',
  // TOKEN: 'token',
};

export const CONTEXT_HELP = {
  NETWORK: 'Execute actions in the context of a specific Colony',
  /*
   * @TODO To be implemented
   */
  // COLONY: 'Execute actions in the context of the Colony Network',
  // TOKEN: 'Execute actions in the context of a specific Token',
};

export const ACTION = {
  LIST: ['list', 'ls', 'l'],
  COUNT: ['count', 'c'],
};

export const ACTION_HELP = {
  LIST: 'List the entries in the current context',
  COUNT: 'Count the entries in the current context',
};

/*
 * Process exit codes
 */
export const STATUS = {
  CANNOT_EXECUTE: 126,
  NOT_FOUND: 127,
};

export const TABLE_OPTS = {
  chars: {
    top: '',
    'top-mid': '',
    'top-left': '',
    'top-right': '',
    bottom: '',
    'bottom-mid': '',
    'bottom-left': '',
    'bottom-right': '',
    left: '',
    'left-mid': '',
    mid: '',
    'mid-mid': '',
    right: '',
    'right-mid': '',
    middle: '          ',
  },
  style: {
    'padding-left': 0,
    'padding-right': 0,
  },
};
