const AWS = require("aws-sdk"); 

AWS.config.update({ 
    region: "us-west-1"
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = "bitsnbytes";
const settingPath = '/settings';
const healthPath = '/health';

exports.handler = async function(event) {
    console.log('Request event: ', event);
    let response;

    switch(true) {
        case event.httpMethod === 'GET' && event.path === healthPath:
            response = buildResponse(200);
            break;
        case event.httpMethod === 'GET' && event.path === settingPath:
            response = await querySettings(event.queryStringParameters.username);
            break;
        case event.httpMethod === 'POST' && event.path === settingPath:
            response = await createSettings(JSON.parse(event.body));
            break;
        case event.httpMethod === 'PATCH' && event.path === settingPath:
            const requestBody = JSON.parse(event.body);
            response = await editSettings(JSON.parse(event.body));
            break;
        case event.httpMethod === 'DELETE' && event.path === settingPath:
            response = await deleteSettings(JSON.parse(event.body)['username']);
            break;
    }

    return response;
}

async function querySettings(username) {
    var docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
        ExpressionAttributeNames: {
            "#theUser": "username"
        },
        ExpressionAttributeValues: {
            ":username": username
        }, 
        KeyConditionExpression: "#theUser = :username", 
        TableName: dynamodbTableName
    }; 

    return await docClient.query(params).promise().then((response) => {
        console.log("GetItem succeeded:", JSON.stringify(response, null, 2));
        return buildResponse(200, response.Items[0]);   // index 0 to return the JSON format, not the array
    }, (error) => {
        console.error("QUERYERROR: Could not query user settings! : ", error);
    });
}

async function createSettings(requestBody) {
    const params = {
        TableName: dynamodbTableName,
        Item: requestBody
    }
    return await dynamodb.put(params).promise().then(() => {
        const body = {
            Operation: 'SAVE',
            Message: 'SUCCESS',
            Item: requestBody
        }
        return buildResponse(200, body);
    }, (error) => {
        console.error("POSTSETTINGS: Could not post user settings! : ", error);
    });
}

async function editSettings(requestBody) {
    var docClient = new AWS.DynamoDB.DocumentClient();

    // requestBody is a JSON, get the individual items
    const rBody = JSON.parse(JSON.stringify(requestBody));
    const username = rBody.username;
    const { sports, business, entertainment, health, science, technology, frequency, lastUpdated }  = rBody.settings;

    let params = {
        TableName: dynamodbTableName,
        Key: {
            'username': username,
        },
        UpdateExpression: `set sports = :sportsVal, 
            business = :businessVal, 
            entertainment = :entertainmentVal, 
            health = :healthVal, 
            science = :scienceVal, 
            technology = :technologyVal, 
            frequency = :frequencyVal, 
            lastUpdated = :lastUpdatedVal
        `,
        ExpressionAttributeValues: {
            ":sportsVal": sports,
            ":businessVal": business,
            ":entertainmentVal": entertainment,
            ":healthVal": health,
            ":scienceVal": science,
            ":technologyVal" : technology,
            ":frequencyVal" : frequency,
            ":lastUpdatedVal" : lastUpdated
        },
        ReturnValues: 'UPDATED_NEW'
    }
    
    return await docClient.update(params).promise().then((response) => {
        console.log("Update Settings: ", response);
        const body = {
            Operation: 'UPDATE',
            Message: 'SUCCESS',
            UpdatedAttributes: response
        }
        return buildResponse(200, body);
    }, (error) => {
        console.error("PATCHERROR: Could not patch user settings! : ", error);
    });
}
async function deleteSettings(username) {
    const params = {
        TableName: dynamodbTableName,
        Key: {
            'username': username
        },
        ReturnValues: 'ALL_OLD'
    }
    return await dynamodb.delete(params).promise().then((response) => {
        const body = {
            Operation: 'DELETE',
            Message: 'SUCCESS',
            Item: response
        }
        return buildResponse(200, body);
    }, (error) => {
        console.error("DELETEERROR: Could not delete user settings! : ", error);
    });
}

function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods" : "OPTIONS,POST,PUT,GET,DELETE,PATCH",
            "Access-Control-Allow-Credentials" : true,
            "Access-Control-Allow-Origin" : "*",
            "X-Requested-With" : "*"
        },
        body: JSON.stringify(body)
    }
}