import React from 'react';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import theme from '../configs/theme';
import { AppLayout } from 'components/layout/app-layout.component';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const client = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 1000,
			refetchOnWindowFocus: false,
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={client}>
			<ReactQueryDevtools initialIsOpen={false} />
			<ThemeProvider theme={theme}>
				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
