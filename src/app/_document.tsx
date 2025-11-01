// import * as React from "react";
// import Document, { Html, Head, Main, NextScript } from "next/document";
// import createEmotionServer from "@emotion/server/create-instance";
// import createEmotionCache from "../createEmotionCache";
// import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
// import { DocumentHeadTags } from "@mui/material-nextjs/v13-pagesRouter";

// export default class MyDocument extends Document {
// 	render() {
// 		return (
// 			<Html lang="es">
// 				<Head>
// 					{/* Inyecta los estilos críticos */}
// 					<DocumentHeadTags {...props } />
// 					{this.props.emotionStyleTags}
// 				</Head>
// 				<body>
// 					<InitColorSchemeScript attribute="class" />
// 					<Main />
// 					<NextScript />
// 				</body>
// 			</Html>
// 		);
// 	}
// }

// MyDocument.getInitialProps = async (ctx) => {
// 	const originalRenderPage = ctx.renderPage;

// 	const cache = createEmotionCache();
// 	const { extractCriticalToChunks } = createEmotionServer(cache);

// 	ctx.renderPage = () =>
// 		originalRenderPage({
// 			enhanceApp: (App: any) => (props) => <App emotionCache={cache} {...props} />,
// 		});

// 	const initialProps = await Document.getInitialProps(ctx);
// 	const emotionStyles = extractCriticalToChunks(initialProps.html);
// 	const emotionStyleTags = emotionStyles.styles.map((style) => (
// 		<style
// 			data-emotion={`${style.key} ${style.ids.join(" ")}`}
// 			key={style.key}
// 			dangerouslySetInnerHTML={{ __html: style.css }}
// 		/>
// 	));

// 	return {
// 		...initialProps,
// 		emotionStyleTags,
// 	};
// };

