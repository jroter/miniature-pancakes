# Getting Started

## Setup your environment

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