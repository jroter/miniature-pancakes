#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FrontEndStack } from '../lib/front-end-stack';
import { BackEndStack } from '../lib/back-end-stack';

const account = '644544080505';
//077907670534
const region = 'us-west-2';

const app = new cdk.App();
new FrontEndStack(app, 'FrontEndStack', {
  env: {
    account,
    region
  }
});

new BackEndStack(app, 'BackEndStack', {
  env: {
    account,
    region
  }
});