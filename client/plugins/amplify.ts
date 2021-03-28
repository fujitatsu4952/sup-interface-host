import Amplify from '@aws-amplify/core';
import Storage from '@aws-amplify/storage';
// import Analytics from '@aws-amplify/analytics';
import '@aws-amplify/api';
import Auth from '@aws-amplify/auth';

export const awsmobile = {
    Auth: {
        identityPoolId: process.env.AUTH_IDEMTITY_POOL_ID!,
        region: process.env.AUTH_REGION!,
        userPoolId: process.env.AUTH_USER_POOL_ID!,
        userPoolWebClientId: process.env.AUTH_USER_POOL_WEB_CLIENT_ID!,
    },
    Storage: {
        AWSS3: {
            bucket: process.env.STORAGE_AWSS3_BUCKET!,
            region: process.env.STORAGE_AWSS3_REGION!,
            baseUrl: process.env.STORAGE_AWSS3_BASE_URL!,
            masterBaseUrl: process.env.STORAGE_AWSS3_MASTER_BASE_URL!,
        },
    },
    aws_project_region: process.env.AWS_PROJECT_REGION!,
    aws_appsync_graphqlEndpoint: process.env.APPSYNC_GRAPHQL_ENDPOINT!,
    aws_appsync_region: process.env.APPSYNC_REGION!,
    aws_appsync_authenticationType: process.env.APPSYNC_AUTHENTICATIONTYPE!,
    aws_appsync_apiKey: process.env.APPSYNC_APIKEY!
};
Amplify.configure(awsmobile);
Auth.configure(awsmobile.Auth);
Storage.configure(awsmobile.Storage);
