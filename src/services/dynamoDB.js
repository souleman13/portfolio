import AWS from 'aws-sdk'
import { unmarshalItem } from 'dynamodb-marshaler'

AWS.config.update({
    accessKeyId: "AKIAIK26W7W7VI7F646Q",
    secretAccessKey: "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",
    "region": "us-east-1" ,
    apiVersions: {
        dynamodb: '2012-08-10',
        //other service APIs
    }
})

var dynamoDb = new AWS.DynamoDB();

// var dynamoDb = new AWS.DynamoDB.DocumentClient();

export const GetSkills = () => {
    return dynamoDb.scan({ TableName: 'skills' }).promise()
        .then(response => response.Items.map(unmarshalItem))
}