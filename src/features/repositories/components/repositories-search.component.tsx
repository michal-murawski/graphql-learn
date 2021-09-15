import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import { FC } from 'react';

const { Search } = Input;

export type RepositoriesSearchComponentProps = SearchProps;

export const RepositoriesSearchComponent: FC<RepositoriesSearchComponentProps> = (props) => (
	<Search placeholder="Search repositories" enterButton {...props} />
);
