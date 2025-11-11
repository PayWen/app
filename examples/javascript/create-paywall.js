const response = await fetch('https://api.paywen.app/v1/paywalls', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: 'https://example.com/premium-article',
    price: 2.99,
    currency: 'USDC',
    title: 'Premium Article Access'
  })
})

const data = await response.json()
console.log('Paywall created:', data.url)
