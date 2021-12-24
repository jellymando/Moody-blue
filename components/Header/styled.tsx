import styled from '@emotion/styled';
import { Container } from '../Layout/styled';
import { FONTSIZE, COLOR } from 'constants/style';

export const Top = styled.div`
    border-bottom: 1px solid #d7d7d7;
`;

export const HeaderContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 0;
`;

export const Logo = styled.h1`
    .logo {
        max-width: 210px;
    }
`;

export const SideMenu = styled.ul`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
`;

export const Menu = styled.li`
    &:not(:last-of-type) {
        margin-right: 10px;
    }

    .search_icon {
        max-width: 32px;
        padding-right: 3px;
        cursor: pointer;
    }

    .cart_icon {
        max-width: 36px;
    }

    .login_icon {
        max-width: 36px;
    }
`;

export const LoginButton = styled.button`
    background: none;
    cursor: pointer;
`;

export const Bottom = styled.div`
    border-bottom: 1px solid #d7d7d7;
    line-height: inherit;
`;

export const Underline = styled.span<{ left: number; width: number }>`
    display: none;
    position: absolute;
    left: ${({ left }) => left}px;
    bottom: 0;
    width: ${({ width }) => width}px;
    height: 4px;
    background: ${COLOR.MOODYBLUE};
    transition: 0.5s;
`;

export const NavContainer = styled(Container)`
    position: relative;

    ul {
        display: flex;
        justify-content: space-between;
        padding: 0 5%;

        &:hover {
            ~ ${Underline} {
                display: inline-block;
            }
        }

        li {
            a {
                font-family: 'Nunito', sans-serif;
                font-size: ${FONTSIZE.LARGE};
                color: ${COLOR.BLACK};
                padding: 15px;
            }
        }
    }

    &:hover .underline {
        display: inline-block;
    }
`;
