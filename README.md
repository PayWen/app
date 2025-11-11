# PayWen

**Instant Crypto Paywalls. Built on Solana. Powered by Coinbase CDP.**

PayWen is an open-source crypto paywall service that lets you monetize any URL instantly. Paste a link, set a price, and receive payments directly to your non-custodial wallet. No sign-ups, APIs, or integrations required.

Visitors can pay with any cryptocurrency, and you receive USDC on Solana within seconds.

---

### Key Features

- Instant Payments: Receive USDC in 2–5 seconds after a transaction confirms on Solana.  
- Universal Crypto Support: Accept BTC, ETH, SOL, and more, automatically converted to USDC.  
- 1% Platform Fee: Keep 99% of your earnings.  
- Non-Custodial Wallets: You maintain full control over your funds at all times.  
- Passkey Authentication: Secure wallet creation and withdrawals using Face ID, Touch ID, or device PIN.  
- Built on Solana: Fast, scalable, and battle-tested blockchain infrastructure.  

---

### Why PayWen

PayWen combines the simplicity of Web2 monetization with the sovereignty and speed of Web3.  
It is the easiest way to sell access to premium articles, videos, APIs, datasets, research, or any web content.

You own your wallet. You own your earnings.

---

### Documentation

Full documentation is available at: [https://paywen.dev/docs](https://paywen.dev/docs)

## Quick Start

Get started with PayWen in three simple steps. No account creation or setup required.

### 1. Input Your Webpage

Paste any URL you want to monetize. Works with articles, videos, research papers, courses, and any other web content.

```bash
https://example.com/article
```

### 2. Set Your Price

Choose how much your content is worth. You can select from preset options or set a custom price.

```bash
$0.99   $2.99   $4.99   Custom
```

### 3. Share Your Link

Once created, PayWen gives you a unique paywall link. Share it anywhere.

```bash
paywen.dev/abc123
```

---

## Example: Creating a Paywall Programmatically

Developers can create paywalls directly through the API.  
Below are examples in JavaScript and TypeScript.

### JavaScript Example

```javascript
// create-paywall.js

const response = await fetch('https://api.paywen.dev/v1/paywalls', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: 'https://example.com/premium-article',
    price: 2.99,
    currency: 'USDC',
    title: 'Premium Article Access'
  })
})

const { paywallId, paywallUrl } = await response.json()
console.log('Paywall created:', paywallUrl)
```

### TypeScript Example

```typescript
// create-paywall.ts

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
```

---

### Example Output

```bash
Paywall created: https://paywen.dev/abc123
```

Once your paywall is live, visitors can pay using any crypto, and your wallet receives USDC within 2–5 seconds.
