cc-ui: https://github.com/jerrythimothyj/cc-ui - Frontend
  - React
  - Redux-Saga
  - Ramda
  - Jest Puppeteer E2E
  - Typescript
  - Axios

cc-api: https://github.com/jerrythimothyj/cc-api - Backend
  - NestJS ( ExpressJS on steroids )
  - Ramda
  - class-validator
  - in-memory-db
  - Luhn
  - Jest Unit test
  - Typescript

Requirements:
  - Node: v10.15.3


To run,

1) Clone the cc-api and do
  > npm install
  > npm run start
  then the server should start as localhost:8080

2) Clone the cc-ui and do
  > npm install
  > npm run start
  then the react application should start as localhost:3000

To run tests,

1) Clone the cc-api and do
  > npm install
  > npm run test
  it will run the unit tests

2) Clone the cc-ui and do
  > npm install
  > npm run test
  it will run the e2e tests. Note: Make sure the api and the react applicaion is running before starting the e2e.