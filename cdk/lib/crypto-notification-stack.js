const cdk = require('@aws-cdk/core');
const lambda = require('@aws-cdk/aws-lambda');
const events = require('@aws-cdk/aws-events');
const targets = require('@aws-cdk/aws-events-targets');

class CryptoNotificationStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const handler = new lambda.Function(this, 'notification-lambda', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('../notification-lambda'),
      handler: 'textalert.lambdaHandler',
      environment: {
        COINMARKET_API_KEY: process.env.COINMARKET_API_KEY,
        TWILIOPHONENUMBER: process.env.TWILIOPHONENUMBER,
        PHONENUMBER: process.env.PHONENUMBER,
        ACCOUNTSID: process.env.ACCOUNTSID,
        AUTHTOKEN: process.env.AUTHTOKEN
      },
      timeout: cdk.Duration.seconds(60),
      memorySize: 512,
      functionName: 'crypto-notification-lambda',
      logRetention: cdk.Duration.days(7)
    });

    const lambdaTarget = new targets.LambdaFunction(handler);

    const scheduleRule = new events.Rule(this, 'notification-schedule-rule', {
      schedule: events.Schedule.expression('cron(0 7 * * ? *)'),
      targets: [lambdaTarget]
    });
  }
}

module.exports = { CryptoNotificationStack }
