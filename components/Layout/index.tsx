import React from 'react';
import { Global } from '@emotion/react';
import Header from '../Header';
import { reset, Container } from './styled';

const Layout = ({ children }: { children: JSX.Element[] }) => {
    return (
        <>
            <Global styles={reset} />
            <Header />
            <Container>{children}</Container>
        </>
    );
};

export default Layout;
