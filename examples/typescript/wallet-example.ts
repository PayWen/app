import { PayWenWallet } from '@paywen/sdk'

async function main() {
  const wallet = await PayWenWallet.connect()
  const balance = await wallet.getBalance()
  console.log('Wallet balance:', balance, 'USDC')
}

main()
