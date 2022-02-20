const AWS = require("aws-sdk");

//pointing to our local DynamoDB
AWS.config.update({
    region: "us-west-2",
});

if (process.env.NODE_ENV === 'development') {
    AWS.config.update({
        endpoint: "http://localhost:8000"
    });
}

console.log(process.env.NODE_ENV);

const dynamo = new AWS.DynamoDB.DocumentClient();
const tableName = "ModuleInfo";

exports.getVisits = (module) => {
    const params = {
        TableName: tableName,
        Key: {
            'module': module
        }
    }
    return dynamo.get(params).promise()
    .then((data) => {
        if (! data || !data.Item) {
            return {};
        }
    })
    .catch((err) => {
        console.log(err);
        return {};
    });
}

exports.addVisit = (module) => {
    const params = {
        TableName: tableName,
        Key: {
            'module':module
        },
        UpdateExpression: "ADD visits :val",
        ExpressionAttributeValues: {
            ":val":1
        },
        ReturnValues:"UPDATED_NEW"
    };
    return dynamo.update(params).promise()
    .then((data) => {
        if (!data || !data.Attributes) {
            return {
                successful: false
            }
        }
        return {
            successful: true,
            visits: data.Attributes.visits
        };
    })
    .catch((err) => {
        return {
            successful: false
        }
    });
}

exports.getAllModulesInfo = () => {
    const params = {
        TableName: tableName
    }
    return dynamo.scan(params).promise()
    .then((data) => {
        console.log(data)
        if (!data || !data.Items) {
            return {}
        }
        return data
    })
    .catch((err) => {
        console.log(err);
        return {};
    });
}

exports.getModuleInfo = (module) => {
    const params = {
        TableName: tableName,
        Key: {
            'module': module
        }
    }

    // Created a request to Dynamo (no network)
    // AWS-SDK, go call Dynamo with my request (network) => Returns a promise
    // return a promise to module.js to ensure we will eventually return the data were seeking
    return dynamo.get(params).promise()
    //Once we've return the promise its time to get what we promised
    .then((data) => {
        if (!data || !data.Item) {
            return {};
        }

        return data.Item;
    })
    .catch((err) => {
        console.log(err);
        return {};
    });
}

exports.addLike = (module) => {
    const params = {
        TableName: tableName,
        Key: {
            'module':module
        },
        UpdateExpression: "ADD likes :val",
        ExpressionAttributeValues: {
            ":val":1
        },
        ReturnValues:"UPDATED_NEW"
    };

    return dynamo.update(params).promise()
    .then((data) => {
        if (!data || !data.Attributes) {
            return {
                successful: false
            }
        }

        return {
            successful: true,
            likes: data.Attributes.likes
        };
    })
    .catch((err) => {
        return {
            successful: false
        }
    });
}

exports.addDisLike = (module) => {
    const params = {
        TableName: tableName,
        Key: {
            'module':module
        },
        UpdateExpression: "ADD dislikes :val",
        ExpressionAttributeValues: {
            ":val":1
        },
        ReturnValues: "UPDATED_NEW"
    };
    return dynamo.update(params).promise()
    .then((data) => {
        if (!data || !data.Attributes) {
            return {
                successful:false
            }
        }
        
        return {
            successful:true,
            disLikes: data.Attributes.dislikes
        };
    })
    .catch((err) => {
        return {
            successful:false
        }
    });   
}