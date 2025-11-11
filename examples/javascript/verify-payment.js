import { verifyPayment } from '@paywen/sdk'

const payment = await verifyPayment('txn_04be1e')
console.log('Payment verified:', payment.status)
