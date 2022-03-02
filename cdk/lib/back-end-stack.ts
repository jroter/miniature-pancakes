import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import { EndpointType, LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { DomainStack } from './domain-stack';
import { ARecord, RecordTarget, PublicHostedZone } from 'aws-cdk-lib/aws-route53';
import { ApiGateway } from 'aws-cdk-lib/aws-route53-targets';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';

//Adding domain stack onto the prop constructor args
interface BackEndStackProps extends StackProps {
    domainStack: DomainStack;
}

export class BackEndStack extends Stack {
  constructor(scope: Construct, id: string, props?: BackEndStackProps) {
    super(scope, id, props);
    const backEndDomain:string = props?.domainStack.apiHostedZone.zoneName ? props?.domainStack.apiHostedZone.zoneName : "";
    const modulesTable = new Table(this, 'ModulesTable', {
        tableName: 'ModuleInfo',
        partitionKey: {
            name: 'module',
            type: AttributeType.STRING, 
        },
        readCapacity: 25, //400KB
        writeCapacity: 25, //100KB
        removalPolicy: RemovalPolicy.DESTROY
    });

    const expressServer = new Function(this, 'ExpressServer', {
        handler: 'index-lambda.main', // What is the 'main' function called
        code: Code.fromAsset('../back-end'),
        runtime: Runtime.NODEJS_14_X
    });

    if (!props?.domainStack.domainCert) {
        throw new Error("Certificate cannot be undefined");
    }
    modulesTable.grantReadWriteData(expressServer);
    const api = new LambdaRestApi(this, 'ExpressServerApi', {
        handler: expressServer,
        //Setting the new domain name to the API gateway provided IP
        domainName: {
            domainName: 'api.uwb-css-startup.com',
            certificate: props.domainStack.domainCert,
            endpointType: EndpointType.EDGE
        }
    })
    new ARecord(this, 'ApiAliasRecord', {
        zone: props?.domainStack.apiHostedZone,
        target: RecordTarget.fromAlias(new ApiGateway(api))
    });
  }
}
