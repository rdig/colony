import ColonyNetworkClient from '@colony/colony-js-client';

import { getAdapter } from '~utils';

import { RINKEBY } from '~const';

const networkClient = async (network = RINKEBY) => {
  const client = new ColonyNetworkClient({
    adapter: getAdapter(network),
    query: {},
  });
  await client.init();
  return client;
};

export default networkClient;
