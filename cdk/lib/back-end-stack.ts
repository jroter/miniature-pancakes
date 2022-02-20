import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';

export class BackEndStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

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

    modulesTable.grantReadWriteData(expressServer);
    
    const api = new LambdaRestApi(this, 'ExpressServerApi', {
        handler: expressServer
    })
  }
}
