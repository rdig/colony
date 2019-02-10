import { create as createWallet } from '@colony/purser-software';

import getProvider from './getProvider';

import { RINKEBY } from '~const';

const getSoftwareWallet = (provider = getProvider(RINKEBY)) => {
  const walletInstance = createWallet({ entropy: new Uint8Array(10) });
  walletInstance.provider = provider;
  return walletInstance;
};

export default getSoftwareWallet;
