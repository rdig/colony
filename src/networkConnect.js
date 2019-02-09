import { providers } from 'ethers';
import { create as createWallet } from '@colony/purser-software';
import EthersAdapter from '@colony/colony-js-adapter-ethers';
import NetworkLoader from '@colony/colony-js-contract-loader-network';
import ColonyNetworkClient from '@colony/colony-js-client';

const connectNetwork = async (network = 'rinkeby') => {
  const loader = new NetworkLoader({ network });
  const provider = providers.getDefaultProvider(network);
  const wallet = createWallet({ entropy: new Uint8Array(10) });
  wallet.provider = provider;

  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  });

  const networkClient = new ColonyNetworkClient({ adapter, query: {} });
  await networkClient.init();

  return networkClient;
};

export default connectNetwork;
