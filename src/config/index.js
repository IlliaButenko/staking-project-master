import stakingAbi from '../utils/staking-abi.json';
import tokenAbi from '../utils/token-abi.json';

export default {
  cloot: {
    contract: '0x1aEC3EC9b1B9cb33048c020543CEA7CF3148cBc1',
    abi: tokenAbi,
    symbol: 'CLOOT',
    decimals: 18,
  },
  staking: {
    contract: '0x866475E88871Eb43D38DEA0FBd22800B25f09a65',
    abi: stakingAbi,
  },
};
