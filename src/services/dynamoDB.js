import AWS from 'aws-sdk'
import { unmarshalItem } from 'dynamodb-marshaler'
import { aws_cred } from './credential'

AWS.config.update({
    accessKeyId: aws_cred.accessKeyId,
    secretAccessKey: aws_cred.secretAccessKey,
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