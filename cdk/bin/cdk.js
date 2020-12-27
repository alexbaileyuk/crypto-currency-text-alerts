#!/usr/bin/env node

const dotenv = require('dotenv');
dotenv.config();

const cdk = require('@aws-cdk/core');
const { CryptoNotificationStack } = require('../lib/crypto-notification-stack');

const app = new cdk.App();
new CryptoNotificationStack(app, 'CryptoNotificationStack');
