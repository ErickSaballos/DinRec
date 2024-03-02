import { Connection } from '@solana/web3.js';

const rpcUrl = 'https://devnet.helius-rpc.com/?api-key=90d3ebef-4cdb-4d17-ab2e-b954fd29d004';
const connection = new Connection(rpcUrl);

export default connection;