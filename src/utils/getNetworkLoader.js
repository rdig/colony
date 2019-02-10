import NetworkLoader from '@colony/colony-js-contract-loader-network';

import { RINKEBY } from '~const';

const getNetworkLoader = (network = RINKEBY) => new NetworkLoader({ network });

export default getNetworkLoader;
