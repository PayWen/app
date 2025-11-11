import { aiWallet } from '@paywen/sdk'

async function main() {
  const paywallUrl = 'https://paywen.app/pw_5c91e2'
  const challenge = await fetch(`${paywallUrl}/challenge`)
  const tx = await aiWallet.pay(challenge)
  const content = await fetch(`${paywallUrl}/content?proof=${tx.hash}`)
  console.log('Unlocked content:', await content.text())
}

main()
