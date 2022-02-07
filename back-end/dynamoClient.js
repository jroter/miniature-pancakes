const AWS = require("aws-sdk");

//pointing to our local DynamoDB
AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.getModuleLikeDislike = (module) => {
    const params = {
        TableName: 'likeDislike',
        Key: {
            'module': module
        }
    }

    dynamo.get(params, (err,data) => {
        if (err) console.log(err);
        else console.log(data);
    });
}

exports.addLike = (module) => {
    const params = {
        TableName: 'likeDislike',
        Key: {
            'module':module
        },
        UpdateExpression: "ADD likes :val",
        ExpressionAttributeValues: {
            ":val":1
        },
        ReturnValues:"UPDATED_NEW"
    };

   dynamo.update(params, (err, data) => {
        if (err) console.log(err);
        else console.log(data);
   }); 
}

exports.addDisLike = (module) => {
    const params = {
        TableName: 'likeDislike',
        Key: {
            'module':module
        },
        UpdateExpression: "ADD dislikes :val",
        ExpressionAttributeValues: {
            ":val":1
        },
        ReturnValues: "UPDATED_NEW"
    };
    
}