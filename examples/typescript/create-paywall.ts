import { createPaywall } from '@paywen/sdk'

async function main() {
  const paywall = await createPaywall({
    url: 'https://example.com/premium-article',
    price: 2.99,
    currency: 'USDC',
    title: 'Premium Article Access'
  })
  console.log('Paywall created:', paywall.url)
}

main()
