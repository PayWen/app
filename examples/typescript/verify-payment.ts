import { verifyPayment } from '@paywen/sdk'

async function main() {
  const payment = await verifyPayment('txn_04be1e')
  console.log('Payment verified:', payment.status)
}

main()
