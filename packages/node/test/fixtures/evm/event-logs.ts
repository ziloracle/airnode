import { ethers } from 'ethers';

type Log = ethers.providers.Log;

// =================================================================
// Short requests
// =================================================================
export function buildShortClientRequest(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 15,
    blockHash: '0x27dc97487287b0ab8d984bae07329cf2df0baefe2a2e6164eaa430c2a6004755',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e09843d3ab43c584e58d82302e196d05efe4466773a61d259b6ecd99bd8baf411b00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000060316200000000000000000000000000000000000000000000000000000000000066726f6d000000000000000000000000000000000000000000000000000000004554480000000000000000000000000000000000000000000000000000000000',
    topics: [
      '0xfcbcd5adb2d26ecd4ad50e6267e977fd479fcd0a6c82bde8eea85290ab3b46e6',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0xb781aa3a3ebcd64f31ab8b71d856385cbf7ccd7bc4beec1f2d3185342727add3',
    ],
    transactionHash: '0x09268ef53816b82b447d21f951c351669d97ca4597ebf3aac392fbb7236ea260',
    logIndex: 0,
    ...overrides,
  };
}

export function buildShortClientRequestFulfilled(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 19,
    blockHash: '0x69e84ccc544a1981d270abf07fe7fb7cd339959510f93217e0848fa6020ac8d7',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043',
    topics: [
      '0x1bdbe9e5d42a025a741fc3582eb3cad4ef61ac742d83cc87e545fbd481b926b5',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0xb781aa3a3ebcd64f31ab8b71d856385cbf7ccd7bc4beec1f2d3185342727add3',
    ],
    transactionHash: '0xd59041ab433c2d47a1c7663db28cb429726a925d6893b5b47f68c8e38f93063c',
    logIndex: 0,
    ...overrides,
  };
}

// =================================================================
// Regular requests
// =================================================================
export function buildClientRequest(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 16,
    blockHash: '0x3961aec2469b6206cf29b91acdf41ff310b007a3898577e6952ac1f7f14eb1a9',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e09843d3ab43c584e58d82302e196d05efe4466773a61d259b6ecd99bd8baf411b0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a46c4b41d72ada9d14157b28a8a2db97560fff120000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e0d3bd14640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000060316200000000000000000000000000000000000000000000000000000000000066726f6d000000000000000000000000000000000000000000000000000000004554480000000000000000000000000000000000000000000000000000000000',
    topics: [
      '0xaff6f5e5548953a11cbb1cfdd76562512f969b0eba0a2163f2420630d4dda97b',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0x42c0d4bc601936a673513a7601df394c1574c9af768dbb28ec3a65f019bafffd',
    ],
    transactionHash: '0x33187e7e8af331baa11ba964b39d65f3d9127dbcf285a34a4b6f0d5c5d7babd7',
    logIndex: 0,
    ...overrides,
  };
}

export function buildClientRequestFulfilled(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 20,
    blockHash: '0x45f1a3b09638d759a355b2c5ee8592c9dcdf956d6fe1c1a3c8d853b26380b6ce',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043',
    topics: [
      '0x1bdbe9e5d42a025a741fc3582eb3cad4ef61ac742d83cc87e545fbd481b926b5',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0x42c0d4bc601936a673513a7601df394c1574c9af768dbb28ec3a65f019bafffd',
    ],
    transactionHash: '0xb5e91680be948547b6959031040b3995348e33538a547859c12e2371cd7848a4',
    logIndex: 0,
    ...overrides,
  };
}

// =================================================================
// Full requests
// =================================================================
export function buildFullClientRequest(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 17,
    blockHash: '0x812d386c9b848769ade6f0eac73e3d5f02639b9f370da67dc86209558bc5ba5c',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000020000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e0ac2e948e29db14b568a3cbaeedc66c0f9b5c5312f6b562784889e8cbd6a6dd9e0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a46c4b41d72ada9d14157b28a8a2db97560fff120000000000000000000000009fe46736679d2d9a65f0992f2272de9f3c7fa6e0d3bd14640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000160316262626262000000000000000000000000000000000000000000000000000066726f6d000000000000000000000000000000000000000000000000000000004554480000000000000000000000000000000000000000000000000000000000746f00000000000000000000000000000000000000000000000000000000000055534400000000000000000000000000000000000000000000000000000000005f74797065000000000000000000000000000000000000000000000000000000696e7432353600000000000000000000000000000000000000000000000000005f70617468000000000000000000000000000000000000000000000000000000726573756c7400000000000000000000000000000000000000000000000000005f74696d657300000000000000000000000000000000000000000000000000003130303030300000000000000000000000000000000000000000000000000000',
    topics: [
      '0x775e78a8e7375d14ad03d31edd0a27b29a055f732bca987abfe8082c16ed7e44',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0xf736744948c715afb3bc1debfbcbca73e92e52dd45203cefbe466baf94e94f57',
    ],
    transactionHash: '0xed554fbbb2971fb2af7f5c800b586de239d806a31785252eb957ac1a9cf72468',
    logIndex: 0,
    ...overrides,
  };
}

export function buildFullRequestFulfilled(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 21,
    blockHash: '0xf2a44b8a08378be693d176f9ad805f5536c7e649463a737833e19f894addd028',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043',
    topics: [
      '0x1bdbe9e5d42a025a741fc3582eb3cad4ef61ac742d83cc87e545fbd481b926b5',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0xf736744948c715afb3bc1debfbcbca73e92e52dd45203cefbe466baf94e94f57',
    ],
    transactionHash: '0xf731d66caaaf31565716d7a6f626def0584b8e3771a07739ddf3f676b5ec93da',
    logIndex: 0,
    ...overrides,
  };
}

// =================================================================
// Withdrawals
// =================================================================
export function buildWithdrawalRequest(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 18,
    blockHash: '0xc9e472cd3c3926653d3684d555a025f9f63ea5677f6d3c932782be08f5678a41',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000034e9a78d63c9ca2148c95e880c6b1f48ae7f121e000000000000000000000000364160ca5e2d5a0a81a71c999787a09e4c8ae2dd',
    topics: [
      '0x3d0ebccb4fc9730699221da0180970852f595ed5c78781346149123cbbe9f1d3',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0x0000000000000000000000000000000000000000000000000000000000000001',
      '0x5104cbd15362576f8591d30ab8a9bf7cd46359da50888732394444660717f124',
    ],
    transactionHash: '0xac3aa3683548a631dd7561cfa32d4e003f43bfc061bb40adc9920c9c1d4d6a60',
    logIndex: 0,
    ...overrides,
  };
}

export function buildWithdrawalFulfilled(overrides?: Partial<Log>): Log {
  return {
    blockNumber: 22,
    blockHash: '0x4da4f28b9085bb2a4936911d13552274fd3d24c04fd5da59669034b07ea110c8',
    transactionIndex: 0,
    removed: false,
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    data:
      '0x00000000000000000000000034e9a78d63c9ca2148c95e880c6b1f48ae7f121e000000000000000000000000364160ca5e2d5a0a81a71c999787a09e4c8ae2dd0000000000000000000000000000000000000000000000000ddef4f5d4f7c000',
    topics: [
      '0x9e7b58b29aa3b972bb0f457499d0dfd00bf23905b0c3358fb864e7120402aefa',
      '0x19255a4ec31e89cea54d1f125db7536e874ab4a96b4d4f6438668b6bb10a6adb',
      '0x0000000000000000000000000000000000000000000000000000000000000001',
      '0x5104cbd15362576f8591d30ab8a9bf7cd46359da50888732394444660717f124',
    ],
    transactionHash: '0xd7018b960a11f53e83763b2a3c582b5e9178caf24fe0e17e3d3367962af8885f',
    logIndex: 0,
    ...overrides,
  };
}
