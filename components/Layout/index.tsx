import React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import Header from '../Header';
import Reset from 'styles/reset';

const Container = styled.div`
    height: 100%;
`;

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <>
            <Global styles={Reset} />
            <Header />
            <Container>{children}</Container>
        </>
    );
};

export default Layout;
