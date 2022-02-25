import { Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment'
import {CachePolicy, Distribution, OriginAccessIdentity} from "aws-cdk-lib/aws-cloudfront";
import {S3Origin} from "aws-cdk-lib/aws-cloudfront-origins";

export class FrontEndStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', { 
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const websiteDeployment = new s3Deployment.BucketDeployment(this, 'DeployStaticWebsite', {
      sources: [s3Deployment.Source.asset('../front-end/build')],
      destinationBucket: websiteBucket
    });
    //created new access identity that allows read access to my S3 bucket
    const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity');
    websiteBucket.grantRead(originAccessIdentity);
    //create a new cloudfront endpoint such that by default we redirect to the index.html endpoint
    new Distribution(this, 'Distribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: new S3Origin(websiteBucket, {originAccessIdentity}),
        cachePolicy: new CachePolicy(this, 'cacheManager',{
          minTtl: Duration.minutes(3),
          maxTtl: Duration.minutes(3),
          defaultTtl: Duration.minutes(3)
        }) 
      },
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/'
        }
      ]
    })
  }
}

