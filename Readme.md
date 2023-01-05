# K6 Project Template

This template is to define a sample project that can be used for performance testing on other projects.

## Installation :hammer:

This framework has been created using Node:16
You can install this from

https://nodejs.org/en/blog/release/v16.16.0/

I recommend using NVM or NVM for Windows as this is not the latest version of Node.


``npm install``

You will also need to install the K6 Binary
See: https://k6.io/docs/get-started/installation/

## Compiling Tests

Compiling Tests is required as in order to support typescript the typescript files need to be transpiled into Javascript (Which is what K6 uses)

``npm run compile``

## Executing Tests

### Test :earth_africa:
Execute a test with the thread configuration provided in the test-orchestrator

``npm run test``

### Validate :house:
Execute the entire suite however limit the VU's to 1 so that the user can validate that the test works on a single thread.

``npm run validate``

### Scenario :man:
Execute an individual scenario

``k6 run -- "<ScenarioFilePath"``

**e.g.**

``k6 run -- .\dist\getProduct.js``