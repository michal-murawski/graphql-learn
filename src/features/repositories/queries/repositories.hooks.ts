import {
	RepositoriesQueryVariables,
	Repository,
	useRepositoriesQuery as useRepositoriesQueryQL,
} from '../../../generated/graphql';
import { compact } from 'lodash';
import graphqlRequestClient from '../../../configs/graphqlRequestClient';
import { compactObject } from '../../../common/helpers/object';

export interface UseRepositoriesQueryOptions {
	variables: RepositoriesQueryVariables;
	pageInfo?: {
		after: number;
	};
}

export const DEFAULT_VARIABLES_REPOSITORIES = { first: 10 };

export const useRepositoriesQuery = ({ variables, pageInfo }: UseRepositoriesQueryOptions) => {
	return useRepositoriesQueryQL(
		graphqlRequestClient,
		Object.assign(
			{
				after: Buffer.from(`cursor:${pageInfo?.after || 1}`).toString('base64'),
			},
			DEFAULT_VARIABLES_REPOSITORIES,
			compactObject(variables)
		),
		{
			select: (response) => ({
				nodes: compact(response?.search.edges?.map((edge) => edge?.node as Partial<Repository>)),
				pageInfo: response.search.pageInfo,
				totalCount: response.search.repositoryCount,
			}),
		}
	);
};
