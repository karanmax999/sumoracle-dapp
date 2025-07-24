import { createConfig } from 'wagmi'
import { mainnet, goerli } from 'wagmi/chains'
import { http } from 'viem'

export const chains = [mainnet, goerli]

export const wagmiConfig = createConfig({
  autoConnect: true,
  chains,
  transports: {
    [mainnet.id]: http(),
    [goerli.id]: http(),
  },
})
