import { PayWenWallet } from '@paywen/sdk'

const wallet = await PayWenWallet.connect()
const balance = await wallet.getBalance()
console.log('Wallet balance:', balance, 'USDC')
