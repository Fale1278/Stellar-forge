// Environment variable validation

export const ENV = {
  network: import.meta.env.VITE_NETWORK || 'testnet',
  factoryContractId: import.meta.env.VITE_FACTORY_CONTRACT_ID ?? '',
  tokenWasmHash: import.meta.env.VITE_TOKEN_WASM_HASH ?? '',
  ipfsApiKey: import.meta.env.VITE_IPFS_API_KEY ?? '',
  ipfsApiSecret: import.meta.env.VITE_IPFS_API_SECRET ?? '',
  /**
   * Off-chain indexer (issue #943). Defaults to **off**, so the app reads
   * directly from RPC unless a deployment explicitly opts in. Turning the flag
   * back off is the documented rollback: because the indexer is never a source
   * of truth, that loses speed, not data.
   */
  indexerEnabled: import.meta.env.VITE_INDEXER_ENABLED === 'true',
  /** Empty means same-origin, which is the normal Vercel deployment. */
  indexerBaseUrl: import.meta.env.VITE_INDEXER_BASE_URL ?? '',
} as const

export const isFactoryConfigured = (): boolean => Boolean(ENV.factoryContractId)
export const isIpfsConfigured = (): boolean => Boolean(ENV.ipfsApiKey && ENV.ipfsApiSecret)
export const isIndexerEnabled = (): boolean => ENV.indexerEnabled
