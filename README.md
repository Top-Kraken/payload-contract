# Payload-Contract

---

## Repository setup

### Install

To install the needed packages run:

`yarn` or `npm install`

### Build

To build the smart contracts run:

`yarn build` or `npm run build`

### Test

To run the tests for the smart contracts run:

`yarn test` or `npm run test`

### Test coverage

For the test converge of the contracts run:

`yarn cover` or `npm run cover`

There are multiple mock contracts that have been created for testing purposes. These have been excluded from the coverage. 

### Deploy

To deploy the contracts locally run:

`yarn deploy` or `npm run deploy`

Note that deploying the contracts locally does not require any inputs.

### Verify

To verify the contracts run:
`npx hardhat verify DEPLOYED_CONTRACT_ADDRESS --network testnet`

### Design Notes
