import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { RepositoriesQueryVariables } from '../../generated/graphql';
import { Typography } from 'antd';
import { DEFAULT_VARIABLES_REPOSITORIES, useRepositoriesQuery } from 'features/repositories/queries/repositories.hooks';
import { RepositoriesSearchComponent } from 'features/repositories/components/repositories-search.component';
import { RepositoriesTableComponent } from 'features/repositories/components/repositories-table.component';

const Repositories = () => {
	const router = useRouter();
	const searchQuery = router.query as RepositoriesQueryVariables;
	const { data, isLoading } = useRepositoriesQuery({
		variables: {
			query: searchQuery.query,
			first: Number(searchQuery.first),
		},
		pageInfo: {
			after: Number(searchQuery.after),
		},
	});
	const pageSize = searchQuery.first || DEFAULT_VARIABLES_REPOSITORIES.first;

	return (
		<Fragment>
			<Typography.Title>Repositories Page</Typography.Title>
			<RepositoriesSearchComponent
				onSearch={async (search) => {
					await router.push({
						query: {
							...searchQuery,
							query: search,
							after: '0',
						} as RepositoriesQueryVariables,
					});
				}}
			/>
			<RepositoriesTableComponent
				loading={isLoading}
				rowKey={'id'}
				dataSource={data?.nodes || []}
				pagination={{
					pageSize,
					total: data?.totalCount,
					current: Number(searchQuery.after) / pageSize + 1 || 1,
				}}
				onChange={async (paginationConfig) => {
					await router.push({
						query: {
							after:
								paginationConfig.current &&
								paginationConfig.pageSize &&
								String((paginationConfig.current - 1) * paginationConfig.pageSize),
							query: searchQuery.query,
							first: paginationConfig.pageSize,
						} as RepositoriesQueryVariables,
					});
				}}
			/>
		</Fragment>
	);
};

export default Repositories;
