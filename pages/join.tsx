import React, { useRef, useState, useEffect } from 'react';

// Style
import styled from '@emotion/styled';
import { Button, Input } from 'jelly-design-system';
import { Wrapper, MainTitle, Info, Warning } from 'styles/contents';

// Api
import { join } from 'api/user';

// Component
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
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRe, setPasswordRe] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [isEmpty, setIsEmpty] = useState({
        id: false,
        password: false,
        passwordRe: false,
    });
    const [isDiscordPassword, setIsDiscordPassword] = useState(false);

    const checkTrim = (target) => {
        const value = target.value.trim();
        target.value = value;
    };

    const handleChangeId = (e) => {
        const value = e.target.value;
        checkTrim(e.target);
        setId(value);
        if (value.length > 0) {
            setIsEmpty((prevIsEmpty) => ({
                ...prevIsEmpty,
                id: false,
            }));
        }
    };

    const handleChangePassword = (e) => {
        const value = e.target.value;
        checkTrim(e.target);
        setPassword(value);
        if (value.length > 0) {
            setIsEmpty((prevIsEmpty) => ({
                ...prevIsEmpty,
                password: false,
            }));
        }
    };

    const handleChangePasswordRe = (e) => {
        const value = e.target.value;
        checkTrim(e.target);
        setPasswordRe(value);
        if (password === value) {
            setIsDiscordPassword(false);
        }
    };

    const handleChangeName = (e) => {
        const value = e.target.value;
        checkTrim(e.target);
        setName(value);
    };

    const handleChangePhone = (e) => {
        const value = e.target.value;
        checkTrim(e.target);
        setPhone(value);
    };

    const handleChangeAddress = (e) => {
        const value = e.target.value;
        checkTrim(e.target);
        setAddress(value);
    };

    const handleClickSubmit = async () => {
        // 필수 입력사항 체크
        if (id && password && passwordRe) {
            if (password !== passwordRe) {
                setIsDiscordPassword(true);
            } else {
                await join({
                    id,
                    password,
                    name,
                    phone,
                    address,
                });
            }
        }
        setIsEmpty((prevIsEmpty) => ({
            ...prevIsEmpty,
            id: !id,
            password: !password,
            passwordRe: !passwordRe,
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
                                <Input label={'아이디*'} onChange={handleChangeId} inline />
                                <Button type="button" color="mellowBlue">
                                    중복조회
                                </Button>
                            </Compulsory>
                            {isEmpty.id && <Warning>아이디를 입력해주세요.</Warning>}
                        </Li>
                        <Li>
                            <Input type="password" label="비밀번호*" onChange={handleChangePassword} inline />
                            {isEmpty.password && <Warning>비밀번호를 입력해주세요.</Warning>}
                        </Li>
                        <Li>
                            <Input type="password" label="비밀번호확인*" onChange={handleChangePasswordRe} inline />
                            {isEmpty.passwordRe && <Warning>비밀번호를 입력해주세요.</Warning>}
                            {isDiscordPassword && <Warning>비밀번호가 일치하지 않습니다.</Warning>}
                        </Li>
                        <Li>
                            <Input type="text" label="성명" onChange={handleChangeName} inline />
                        </Li>
                        <Li>
                            <Input type="text" label="휴대폰" onChange={handleChangePhone} inline />
                        </Li>
                        <Li>
                            <Compulsory>
                                <Input type="text" label="주소" onChange={handleChangeAddress} inline />
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
