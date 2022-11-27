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
            response = await querySettings(event.queryStringParameters.email);
            break;
        case event.httpMethod === 'POST' && event.path === settingPath:
            response = await createSettings(JSON.parse(event.body));
            break;
        case event.httpMethod === 'PATCH' && event.path === settingPath:
            const requestBody = JSON.parse(event.body);
            response = await editSettings(JSON.parse(event.body));
            break;
        case event.httpMethod === 'DELETE' && event.path === settingPath:
            response = await deleteSettings(JSON.parse(event.body)['email']);
            break;
    }

    return response;
}

async function querySettings(email) {
    var docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
        ExpressionAttributeNames: {
            "#theUser": "email"
        },
        ExpressionAttributeValues: {
            ":email": email
        }, 
        KeyConditionExpression: "#theUser = :email", 
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
    const email = rBody.email;
    const { sports, finance, healthfitness, memes, frequency, lastUpdated }  = rBody.settings;

    let params = {
        TableName: dynamodbTableName,
        Key: {
            'email': email,
        },
        UpdateExpression: `set sports = :sportsVal, 
            finance = :financeVal, 
            healthfitness = :healthfitnessVal,
            memes = :memesVal,
            frequency = :frequencyVal,
            lastUpdated = :lastUpdatedVal
        `,
        ExpressionAttributeValues: {
            ":sportsVal": sports,
            ":financeVal": finance,
            ":healthfitnessVal" : healthfitness,
            ":memesVal" : memes,
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

async function deleteSettings(email) {
    const params = {
        TableName: dynamodbTableName,
        Key: {
            'email': email
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
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}