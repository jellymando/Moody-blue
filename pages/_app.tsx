import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Mellow Blue</title>
                <link rel="shortcut icon" href="images/common/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="images/common/favicon.ico" type="image/x-icon" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
