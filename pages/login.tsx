import React from 'react';
import styled from '@emotion/styled';
import { Button, Input, List } from 'jelly-design-system';
import { Wrapper, MainTitle } from 'styles/contents';
import Layout from 'components/Layout';

const LoginWrapper = styled(Wrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 470px;
    height: 100%;
    padding: 30px 0;
`;

const LoginForm = styled.form`
    width: 100%;
`;

const Login = () => {
    return (
        <Layout>
            <LoginWrapper>
                <LoginForm>
                    <MainTitle>로그인</MainTitle>
                    <List>
                        <Input label="아이디" />
                        <Input type="password" label="비밀번호" />
                        <Button type="submit" color="mellowBlue" filled>
                            로그인
                        </Button>
                        <Button type="button" color="mellowBlue">
                            회원가입
                        </Button>
                    </List>
                </LoginForm>
            </LoginWrapper>
        </Layout>
    );
};

export default Login;
