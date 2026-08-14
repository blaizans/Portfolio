import "@/styles/globals.css";
import { LocaleProvider } from "@/i18n/LocaleContext";

export default function App({ Component, pageProps }) {
  return (
    <LocaleProvider>
      <Component {...pageProps} />
    </LocaleProvider>
  );
}
