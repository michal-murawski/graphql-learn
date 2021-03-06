import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { InitializeColorMode } from 'theme-ui';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<InitializeColorMode />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
