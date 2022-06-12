import React from 'react';
import styled from '@emotion/styled';
import { Button, Input, List } from 'jelly-design-system';
import { Wrapper, MainTitle } from 'styles/contents';
import Layout from 'components/Layout';

const LoginWrapper = styled(Wrapper)`
    max-width: 530px;
    height: calc(100vh - 155px);
    padding-top: 5%;
`;

const Login = () => {
    return (
        <Layout>
            <LoginWrapper>
                <MainTitle>로그인</MainTitle>
                <List>
                    <Input label="아이디" />
                    <Input type="password" label="비밀번호" />
                </List>
                <Button type="submit" color="mellowBlue">
                    로그인
                </Button>
            </LoginWrapper>
        </Layout>
    );
};

export default Login;
