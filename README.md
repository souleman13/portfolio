# Create React App example

## How to use

Clone the repo.

Install it and run:

```bash
npm install
npm run start
```

## Notes
* All images hosted on s3 with links stored in dynamodb
* JSS (JavaScript Style Sheet) - new concept heavily pushed by material-ui 1.0. Style objects are stored in the same .js file as components they are used with. This keeps code consolidated, one component is one .js file instead of a .js + .css.
* Webpack creates a dev-server that will automatically reload localhost everytime a file is saved.
* Little to no static content, the only static piece are the words 'Develop With Soule' on the landing page, everything else pulls from DynamoDB

## Technology

Deployment: Amazon Web Services - s3(Bucket), CloudFront, Route 53(DNS)

Build: Webpack, Babel

Database: s3, DynamoDB

Language: Node.js (javascript)

Major Library/Framework: React

Style: Material-ui, JSS
