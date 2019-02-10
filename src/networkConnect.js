import ColonyNetworkClient from '@colony/colony-js-client';

import { getAdapter } from '~utils';

import { RINKEBY } from '~const';

const connectNetwork = async (network = RINKEBY) => {
  const networkClient = new ColonyNetworkClient({
    adapter: getAdapter(network),
    query: {},
  });
  await networkClient.init();
  return networkClient;
};

export default connectNetwork;
