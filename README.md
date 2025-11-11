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

## How It Works

Understanding the complete payment flow from paywall creation to content access.

---

### Payment Flow

```text
1. Visitor clicks Paywall Link
   They see a "Pay to Unlock" modal displaying the price and available payment methods.

2. Payment with Any Crypto
   The visitor pays using their preferred cryptocurrency. Daimo Pay automatically converts all payments to USDC on Solana.

3. On-Chain Confirmation
   Transaction settles on Solana in 2–5 seconds. USDC appears instantly in your wallet.

4. Content Unlocked
   The visitor is redirected to your original URL and can access the content.
```

---

### Wallet Creation

When you create your first paywall, PayWen automatically generates a non-custodial smart wallet secured by your passkey.  
This happens seamlessly in the background.

```text
• Passkey created using your device's biometric authentication  
• Smart wallet deployed on Solana  
• You maintain full control — PayWen never has access to your funds
```

---

### Example: Retrieve Wallet and Check Balance

Below is a sample implementation using the PayWen SDK.

#### TypeScript Example

```typescript
// wallet-example.ts

import { PayWenWallet } from '@paywen/sdk'

async function main() {
  const wallet = await PayWenWallet.connect()
  const balance = await wallet.getBalance()
  console.log('Wallet balance:', balance, 'USDC')
}

main()
```

#### JavaScript Example

```javascript
// wallet-example.js

import { PayWenWallet } from '@paywen/sdk'

const wallet = await PayWenWallet.connect()
const balance = await wallet.getBalance()
console.log('Wallet balance:', balance, 'USDC')
```

---

### Example Output

```bash
Wallet balance: 24.87 USDC
```

---

PayWen uses passkey authentication for wallet security, ensuring private keys never leave your device and cannot be intercepted.

## Non-Custodial Wallets

PayWen uses non-custodial smart wallets deployed on Solana.  
Each wallet is secured by a passkey generated on your device and protected by biometric authentication.  
Your private keys never leave your device.

---

### Key Features

```text
• Passkey-secured smart wallet  
• No custodial access or withdrawal permissions  
• Funds cannot be frozen or seized  
• Withdraw anytime to any Ethereum-compatible address
```

---

## Withdrawing Funds

You can withdraw your USDC earnings to any external address in just a few seconds.

### Steps

```text
1. Authenticate with your passkey (Face ID, Touch ID, or device PIN)
2. Enter the destination Ethereum address
3. Specify the amount to withdraw
4. Confirm the transaction
5. Funds arrive within 2–5 seconds
```

---

### TypeScript Example

```typescript
// withdraw.ts

import { PayWenWallet } from '@paywen/sdk'

async function main() {
  const wallet = await PayWenWallet.connect()

  const tx = await wallet.withdraw({
    to: '0x7423A6C65304C35B32925a3b8448c9e759fbf0EB',
    amount: 10.00, // in USDC
    network: 'solana'
  })

  console.log('Withdrawal successful:', tx.hash)
}

main()
```

---

### JavaScript Example

```javascript
// withdraw.js

import { PayWenWallet } from '@paywen/sdk'

const wallet = await PayWenWallet.connect()

const tx = await wallet.withdraw({
  to: '0x7423A6C65304C35B32925a3b8448c9e759fbf0EB',
  amount: 10.00,
  network: 'solana'
})

console.log('Withdrawal successful:', tx.hash)
```

---

### Example Output

```bash
Withdrawal successful: 4GxHkBdwzsuPXQnPc6yR8vCk4eAqH7MwDsEYpBGuwB6T
```

---

PayWen wallets are powered by Coinbase CDP infrastructure, ensuring reliability and enterprise-grade security.

## Passkey Authentication

PayWen uses WebAuthn-based passkeys for secure, passwordless authentication.  
Each wallet is protected by a unique cryptographic key pair stored in the device's secure enclave.  
Authentication happens entirely locally and never exposes private data to the server.

---

### Why Passkeys

```text
• Eliminate passwords entirely  
• Use Face ID, Touch ID, or device PIN  
• Resistant to phishing and credential theft  
• Keys are bound to the device and cannot be exported
```

---

### How It Works

```text
1. User creates a wallet  
   A WebAuthn key pair is generated locally on the device.

2. Authentication  
   When logging in, the private key signs a cryptographic challenge locally.

3. Verification  
   The signed challenge is verified by PayWen’s backend using the registered public key.

4. Result  
   Access is granted and the user’s wallet is unlocked for transactions.
```

---

### Example: Authenticate with Passkey

#### TypeScript Example

```typescript
// authenticate.ts

import { PayWenAuth } from '@paywen/sdk'

async function main() {
  const session = await PayWenAuth.authenticate({
    challenge: 'random_challenge_string'
  })

  console.log('Authentication successful:', session.userId)
}

main()
```

---

#### JavaScript Example

```javascript
// authenticate.js

import { PayWenAuth } from '@paywen/sdk'

const session = await PayWenAuth.authenticate({
  challenge: 'random_challenge_string'
})

console.log('Authentication successful:', session.userId)
```

---

### Example Output

```bash
Authentication successful: user_91b3c4a7
```

---

Passkeys combine biometric verification with cryptographic signing to secure wallets without storing private keys online.  
This ensures that even if the PayWen servers were compromised, user wallets and authentication keys remain safe.
