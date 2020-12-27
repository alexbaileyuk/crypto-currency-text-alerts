# crypto-currency-text-alerts

Text daily alerts for your favorite crypto currencies

Using node and twilio

## Project setup

Note: You should already have the AWS CLI set up and configured before continuing.

```bash
npm i -g aws-cdk
cd {project_root} && cd cdk && npm i
cd {project_root} && cd notification-lambda && npm i
```

### Environment Variables
Before running locally or deploying with CDK you'll want to add the following env variables...

```bash
export COINMARKET_API_KEY = YOUR_VALUE
export TWILIOPHONENUMBER = YOUR_VALUE
export PHONENUMBER = YOUR_VALUE
export ACCOUNTSID = YOUR_VALUE
export AUTHTOKEN = YOUR_VALUE
```

You can also set these in the .env files in the `cdk` folder and the `notification-lambda` folder.

Note: in the future, some of these may want to be done through AWS secret manager.

### Run Locally

```bash
cd {project_root} && cd notification-lambda
node textalert.js
```
