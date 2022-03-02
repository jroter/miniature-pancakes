import { Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment';
import {CachePolicy, Distribution, OriginAccessIdentity, ViewerProtocolPolicy, AllowedMethods } from "aws-cdk-lib/aws-cloudfront";
import {S3Origin} from "aws-cdk-lib/aws-cloudfront-origins";
import { DomainStack } from './domain-stack';
import { ARecord, AaaaRecord, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';

//Adding domain stack onto the prop constructor args
interface FrontEndStackProps extends StackProps {
  domainStack: DomainStack;
}


export class FrontEndStack extends Stack {
  constructor(scope: Construct, id: string, props?: FrontEndStackProps) {
    super(scope, id, props);
    const frontEndDomain:string = props?.domainStack.websiteHostedZone.zoneName ? props?.domainStack.websiteHostedZone.zoneName : "";
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

    if (!props?.domainStack.domainCert) {
      throw new Error("Certificate cannot be undefined");
    }

    //create a new cloudfront endpoint such that by default we redirect to the index.html endpoint
    const websiteDistribution = new Distribution(this, 'Distribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: new S3Origin(websiteBucket, {originAccessIdentity}),
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: new CachePolicy(this, 'cacheManager',{
          minTtl: Duration.minutes(3),
          maxTtl: Duration.minutes(3),
          defaultTtl: Duration.minutes(3)
        }) 
      },
      //Setting the new domain name to the CloudFront provided IP
      domainNames: [frontEndDomain],
      certificate: props?.domainStack.domainCert,
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/'
        }
      ]
    })

    new ARecord(this, 'WebsiteAliasRecord', {
      zone: props?.domainStack.websiteHostedZone,
      target: RecordTarget.fromAlias(new CloudFrontTarget(websiteDistribution))
    });

    new AaaaRecord(this, 'WebsiteIpv6AliasRecord', {
      zone: props?.domainStack.websiteHostedZone,
      target: RecordTarget.fromAlias(new CloudFrontTarget(websiteDistribution))
    })
  }
}
