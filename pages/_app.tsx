import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Mellow Blue</title>
                <link rel="shortcut icon" href="images/common/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="images/common/favicon.ico" type="image/x-icon" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
