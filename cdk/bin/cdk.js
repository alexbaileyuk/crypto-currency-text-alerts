#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { CryptoNotificationStack } = require('../lib/crypto-notification-stack');

const app = new cdk.App();
new CryptoNotificationStack(app, 'CryptoNotificationStack');
