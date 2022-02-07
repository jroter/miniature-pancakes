const AWS = require("aws-sdk");

//pointing to our local DynamoDB
AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});

const dynamodb = new AWS.DynamoDB();

dynamodb.listTables({},(err,data) => {
    if (err) {console.log(err);}
    else console.log(data);
});