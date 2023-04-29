# awsLambdaHTTPSFunc
Function to trigger URL with Lambda. (in Node.js)

# Guide to use

1. Add new function in AWS Lambda

2. Copy and Paste this code in NodeJS (1.7 or higher) and save

3. Go to CloudWatch -> Rules -> Add Rules

4. You can choose how you wanted this Lambda function is called.

5. Select target as constant and put this


{
  "url": "https://domain.com/script.php"
}
