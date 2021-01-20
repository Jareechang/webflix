import Document from 'next/document'
import { ServerStyleSheet as StyledServerStyleSheet } from 'styled-components'
import { ServerStyleSheets as MuiServerStyleSheets } from '@material-ui/core/styles';

export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {

        const sheets = {
            styled: new StyledServerStyleSheet(),
            mui: new MuiServerStyleSheets()
        }

        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => (
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                    sheets.mui.collect(
                        sheets.styled.collectStyles(<App {...props} />)
                    )
                })
            )

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheets.styled.getStyleElement()}
                        <style id="jss-server-side">{sheets.mui.toString()}</style>
                    </>
                )
            }
        } catch (ex) {
            console.error(
                `_document -> Error handling SSR, ex: ${ex}`
            );
        } finally {
            sheets.styled.seal()
        }
    }
}
