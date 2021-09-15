import { Repository } from '../../../generated/graphql';
import { isEmpty } from 'lodash';
import { Empty, Skeleton, Table, TableProps } from 'antd';
import { FC } from 'react';

/**
 * I was not able to get the specific type of 'node' from generated types.
 * So I assume we provide a partial Repository type
 */
export type RepositoriesTableComponentProps = TableProps<Partial<Repository>>;

const DEFAULT_PAGE_SIZE = 15;

export const RepositoriesTableComponent: FC<RepositoriesTableComponentProps> = ({ loading, ...props }) => {
	return (
		<Table
			columns={[
				{
					title: 'Name',
					dataIndex: 'name',
					render: (name, node) => {
						return (
							<a target="_blank" href={node.url} rel="noopener noreferrer">
								{name}
							</a>
						);
					},
					width: '40%',
				},
				{
					title: 'Stars',
					dataIndex: 'stargazerCount',
					render: (stargazerCount) => `${stargazerCount} 🌟`,
					width: '30%',
				},
				{
					title: 'Forks',
					dataIndex: 'forkCount',
					render: (forkCount) => `${forkCount} 🍴`,
					width: '30%',
				},
			]}
			rowKey={'id'}
			locale={{
				emptyText:
					loading && isEmpty(props.dataSource) ? (
						<Skeleton
							active={true}
							paragraph={{
								rows: props.pagination && props.pagination.pageSize ? props.pagination.pageSize : DEFAULT_PAGE_SIZE,
							}}
						/>
					) : (
						<Empty />
					),
			}}
			{...props}
		/>
	);
};
