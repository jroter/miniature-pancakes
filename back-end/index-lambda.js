const serverlessExpress = require('@vendia/serverless-express')
const app = require('./index');

exports.main = serverlessExpress({ app });