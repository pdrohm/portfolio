import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LanguageProvider from "@/context/LanguageProvider";
import ThemeProvider from "@/context/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
