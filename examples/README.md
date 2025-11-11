# PayWen Example Library

This folder contains demonstration scripts for using the PayWen API and SDK.

## Structure

```text
examples/
├── javascript/       JavaScript usage examples
├── typescript/       TypeScript usage examples
```

---

### Included Examples

| File | Description |
|------|--------------|
| create-paywall | Programmatically create a paywall |
| verify-payment | Check if a transaction is confirmed |
| wallet-example | Retrieve wallet balance |
| withdraw | Send USDC to an external address |
| ai-agent-payment-flow | Example of AI integration using PayWen protocol |

---

Each example is self-contained and can be executed independently once the SDK is installed:

```bash
npm install @paywen/sdk
node examples/javascript/create-paywall.js
```
