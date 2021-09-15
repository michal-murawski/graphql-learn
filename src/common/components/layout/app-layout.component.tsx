/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Layout as LayoutAnt } from 'antd';
import { FC } from 'react';

const { Header, Content, Footer } = LayoutAnt;

export const AppLayout: FC = ({ children }) => {
	return (
		<LayoutAnt sx={{ minHeight: '100vh' }}>
			<Header sx={{ padding: 0 }} />
			<Content sx={{ margin: '24px 16px 0' }}>
				<div sx={{ padding: 24, minHeight: 360 }}>{children}</div>
			</Content>
			<Footer sx={{ textAlign: 'center' }}>Michal Murawski ©2021</Footer>
		</LayoutAnt>
	);
};
