import { GraphQLClient } from 'graphql-request';
import { nextPublicEnvs } from './env';

const requestHeaders = {
	authorization: `Bearer ${nextPublicEnvs.GITHUB_ACCESS_TOKEN}`,
};

const graphqlRequestClient = new GraphQLClient(nextPublicEnvs.GITHUB_GRAPHQL_API, {
	headers: requestHeaders,
});

export default graphqlRequestClient;
