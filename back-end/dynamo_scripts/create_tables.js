const AWS = require("aws-sdk");

//pointing to our local DynamoDB
AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});

const dynamodb = new AWS.DynamoDB();

const params = {
    TableName: 'moduleInformation',
    KeySchema: [
        {AttributeName: "module", KeyType: "HASH"}
    ],
    AttributeDefinitions: [
       { AttributeName: 'module', AttributeType: 'S' }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
}

dynamodb.createTable(params, (err,data) => {
    if (err) console.log(err);
    else console.log(data);

});