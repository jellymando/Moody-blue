import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Button, Input } from 'jelly-design-system';
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

const Ul = styled.ul``;

const Li = styled.li`
    margin-bottom: 20px;

    &.login-button {
        margin-bottom: 15px;
    }
`;

const Login = () => {
    return (
        <Layout>
            <LoginWrapper>
                <LoginForm>
                    <MainTitle>로그인</MainTitle>
                    <Ul>
                        <Li>
                            <Input label="아이디" inline />
                        </Li>
                        <Li>
                            <Input type="password" label="비밀번호" inline />
                        </Li>
                        <Li className="login-button">
                            <Button type="submit" color="mellowBlue" filled>
                                로그인
                            </Button>
                        </Li>
                        <Li>
                            <Link href="/join">
                                <Button type="button" color="mellowBlue">
                                    회원가입
                                </Button>
                            </Link>
                        </Li>
                    </Ul>
                </LoginForm>
            </LoginWrapper>
        </Layout>
    );
};

export default Login;
