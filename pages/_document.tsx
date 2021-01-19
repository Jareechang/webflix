import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => (
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />),
                })
            )

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } catch (ex) {
            console.error(
                `_document -> Error handling SSR, ex: ${ex}`
            );
        } finally {
            sheet.seal()
        }
    }
}
