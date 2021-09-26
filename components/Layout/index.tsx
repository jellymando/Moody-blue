import React from 'react';
import { Global } from '@emotion/react';
import Header from '../Header';
import { reset } from './styled';

const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <>
            <Global styles={reset} />
            <Header />
            {children}
        </>
    );
};

export default Layout;
