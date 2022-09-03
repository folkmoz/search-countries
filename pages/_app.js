import "@styles/globals.css";
import "@styles/index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-loading-skeleton/dist/skeleton.css";

import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import { SWRConfig } from "swr";
import Header from "@components/Header";
import CountriesProvider from "@src/context/countries";

config.autoAddCss = false;
const fetcher = (url) => fetch(url).then((r) => r.json());

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <title>Where in the world? | folkmoz</title>
            </Head>
            <Header />
            <SWRConfig
                value={{
                    fetcher,
                }}
            >
                <CountriesProvider>
                    <Component {...pageProps} />
                </CountriesProvider>
            </SWRConfig>
        </>
    );
}

export default MyApp;
