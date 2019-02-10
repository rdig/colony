import networkClient from './networkClient';

import { asyncCall } from '~utils';

const mainProcess = async () => {
  const networkClientInstance = await networkClient();
  const coloniesCount = await asyncCall(
    networkClientInstance.getColonyCount,
    'Loading Colonies',
  );
  console.log(coloniesCount);
};

mainProcess().then(process.exit);
