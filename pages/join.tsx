import React, { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Button, Input } from 'jelly-design-system';
import { Wrapper, MainTitle, Info, Warning } from 'styles/contents';
import Layout from 'components/Layout';

const JoinWrapper = styled(Wrapper)`
    max-width: 650px;
    padding: 70px 0;

    ${Info} {
        text-align: right;
        margin-bottom: 25px;
    }
`;

const JoinForm = styled.div``;

const Ul = styled.ul``;

const Li = styled.li`
    max-height: auto;
    margin-bottom: 20px;

    &:last-of-type {
        margin-top: 35px;
    }
    label {
        flex: 1 0 140px;
        margin-bottom: 15px;
    }
    ${Warning} {
        margin-top: 5px;
        padding-left: 140px;
    }
`;

const Compulsory = styled.div`
    display: flex;
    align-items: center;

    > div {
        width: 100%;
    }
    button {
        flex: 1 0 110px;
        margin-left: 10px;
    }
`;

const JoinPage = () => {
    const idRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordReRef = useRef(null);
    const [isEmpty, setIsEmpty] = useState({
        id: false,
        password: false,
        passwordRe: false,
    });
    const [isDiscord, setIsDiscord] = useState(false);

    const checkEmpty = (el) => {
        if (!el) return;
        return el.value === '';
    };

    const handleClickSubmit = () => {
        setIsEmpty((prevIsEmpty) => ({
            ...prevIsEmpty,
            id: checkEmpty(idRef.current),
            password: checkEmpty(passwordRef.current),
            passwordRe: checkEmpty(passwordReRef.current),
        }));
    };

    return (
        <Layout>
            <JoinWrapper>
                <MainTitle>회원가입</MainTitle>
                <Info>* 표시된 항목은 필수 입력사항입니다.</Info>
                <JoinForm>
                    <Ul>
                        <Li>
                            <Compulsory>
                                <Input ref={idRef} label={'아이디*'} inline />
                                <Button type="button" color="mellowBlue">
                                    중복조회
                                </Button>
                            </Compulsory>
                            {isEmpty.id && <Warning>아이디를 입력해주세요.</Warning>}
                        </Li>
                        <Li>
                            <Input ref={passwordRef} type="password" label="비밀번호*" inline />
                            {isEmpty.password && <Warning>비밀번호를 입력해주세요.</Warning>}
                        </Li>
                        <Li>
                            <Input ref={passwordReRef} type="password" label="비밀번호확인*" inline />
                            {isEmpty.passwordRe && <Warning>비밀번호를 입력해주세요.</Warning>}
                            {isDiscord && <Warning>비밀번호가 일치하지 않습니다.</Warning>}
                        </Li>
                        <Li>
                            <Input type="password" label="성명" inline />
                        </Li>
                        <Li>
                            <Input type="password" label="휴대폰번호" inline />
                        </Li>
                        <Li>
                            <Compulsory>
                                <Input type="text" label="주소" inline />
                                <Button type="button" color="mellowBlue">
                                    주소찾기
                                </Button>
                            </Compulsory>
                        </Li>
                        <Li>
                            <Button type="button" color="mellowBlue" onClick={handleClickSubmit} filled>
                                회원가입
                            </Button>
                        </Li>
                    </Ul>
                </JoinForm>
            </JoinWrapper>
        </Layout>
    );
};

export default JoinPage;
