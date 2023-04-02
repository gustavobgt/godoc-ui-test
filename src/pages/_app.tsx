// pages/_app.tsx
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle, {theme} from '@gustavobgt/godoc-ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
