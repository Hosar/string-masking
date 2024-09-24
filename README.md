# String API Project

This project is a RESTful API built with NestJS, to handle string utils functions

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)
* You have AWS CLI configured properly including credentials
* You have AWS CDK installed (https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

## Project Structure
lambda/
├── nestjs/                 # Application modules
│   ├── src/                # User module (example)
│        ├── middleware/    # Contains the middleware to log the Inputs and Outputs (Test are included in the file)
│        │
│        ├── string-masking/ # Controller for string masking (Test are included in the file)
│
lib/
│
├── cdk-simple-lambda-nestjs-stack.ts  # CDK Stack for Building AWS Gateway and AWS Lambda


## Installing NestJS API Project

To install the NestJS API Project, follow these steps:

1. Clone the repository:
   ```
   git clone git@github.com:Hosar/string-masking.git
   ```
2. Navigate to the project directory:
   ```
   cd string-masking
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Testing. Test are inside __test__ folder of each module (middleware and string-masking)

`npm run test`

To use NestJS API Project, follow these steps:

1. Start the development server:
   ```
   npm run start
   ```
2. The SWAGGER will be available at `http://localhost:3000/api` 
3. The API will be available at `http://localhost:3000/api/string-masking` 

## API Endpoints

Describe your API endpoints here. For example:

* `GET /api/string-masking?input=Skippy`
* `GET /api/string-masking?input=64607935616`
* `GET /api/string-masking?input=Nananananananananananananananana Batman!`


## CDK Deployment

1) cd lambda -> cd nestjs
2) npm run build
3) from root folder (cd ../cd..) execute: `npx cdk deploy`


    