import EthersAdapter from '@colony/colony-js-adapter-ethers';

import getProvider from './getProvider';
import getNetworkLoader from './getNetworkLoader';
import getSoftwareWallet from './getSoftwareWallet';

import { RINKEBY } from '~const';

const getAdapter = (network = RINKEBY) => {
  const provider = getProvider(network);
  return new EthersAdapter({
    loader: getNetworkLoader(network),
    wallet: getSoftwareWallet(provider),
    provider,
  });
};

export default getAdapter;
