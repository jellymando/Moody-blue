import React from 'react';
import { Global } from '@emotion/react';
import Header from '../Header';
import Reset from 'styles/reset';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <>
            <Global styles={Reset} />
            <Header />
            {children}
        </>
    );
};

export default Layout;
