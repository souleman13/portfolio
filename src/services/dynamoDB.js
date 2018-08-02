import AWS from 'aws-sdk'
import { unmarshalItem } from 'dynamodb-marshaler'

AWS.config.update({
    accessKeyId: "AKIAJNVGCUEOFYRUFAYA",
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