# Getting Started

## Setup your environment

### Downloading AWS CLI to manage AWS services 
Follow this link [here](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

## New User set-up
Create user using IAM on AWS
Then set permissions 
Reconfigure aws via the terminal
```
aws configure
```
then copy your Access Key ID and Secret Access Key ID to the terminal to access the necessary permissions

### Install Node Modules
This installs the dependencies needed for this project
```
npm install
```

### Bootstrap Your AWS Account for CDK

Note that you only need to run this if you are using a new account. You don't need to run this if your account has already been used with CDK.

```
npm run bootstrap
```
### For more resources regarding CDK

information regarding CDK [here](https://docs.aws.amazon.com/cdk/v2/guide/home.html)

API reference can be found [here](https://docs.aws.amazon.com/cdk/api/v1/docs/aws-construct-library.html)

## Making A Code Change
After making a code change, run the steps below to deploy your changes to AWS.

### Build The Project

```
npm run build
```

##### Deploying React Changes
If you make a change on the front-end, be sure to re-build the front-end before rebuilding CDK.
```
cd ../front-end && npm run build && cd ../cdk && npm run build
```


### Deploy The Change To AWS

#### Deploy REACT
```
npm run deploy-react
```
#### Deploy Server
```
npm run deploy-server
```

### CloudFront has a cache delay so
To handle the cache delay to view changes made on S3, go to the lib file and down to ***front-end-stack-ts***
From here you're going to want to go to where the cloudfront endpoint is created:
```
new Distribution(this, 'Distribution', {
```
Then you should see 
```
cachePolicy: new CachePolicy(this, 'cacheManager',{
```
Which is an object that contains a min,max and default.
These can be altered by passing the number of minutes you want the cache to update