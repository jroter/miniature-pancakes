#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FrontEndStack } from '../lib/front-end-stack';
import { BackEndStack } from '../lib/back-end-stack';
import { DomainStack } from '../lib/domain-stack';

const account = '644544080505';

const region = 'us-west-2';

const app = new cdk.App();

const domainStack = new DomainStack(app, 'DomainStack', {
  env: {
    account,
    region
  }
})

new FrontEndStack(app, 'FrontEndStack', {
  env: {
    account,
    region,
  },
  domainStack
});

new BackEndStack(app, 'BackEndStack', {
  env: {
    account,
    region
  },
  domainStack
});