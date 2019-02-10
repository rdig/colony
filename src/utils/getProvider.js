import { getDefaultProvider } from 'ethers';

import { RINKEBY } from '~const';

const getProvider = (network = RINKEBY) => getDefaultProvider(network);

export default getProvider;
