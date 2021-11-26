import styled from '@emotion/styled';
import { Container } from '../Container/styled';
import { fontSize, color } from '../../constants/style';

export const Top = styled.div`
    border-bottom: 1px solid #d7d7d7;
`;

export const HeaderContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
`;

export const Logo = styled.div`
    .logo {
        max-width: 150px;
    }
`;

export const SideMenu = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;

    .icon {
        &:not(span) {
            margin-left: 15px;
        }
    }

    .search_icon {
        max-width: 32px;
        cursor: pointer;
    }

    .cart_icon {
        max-width: 34px;
    }
`;

export const Bottom = styled.div`
    border-bottom: 1px solid #d7d7d7;
`;

export const Underline = styled.span<{ left: number; width: number }>`
    display: none;
    position: absolute;
    left: ${({ left }) => left}px;
    bottom: 0;
    width: ${({ width }) => width}px;
    height: 3px;
    background: ${color.black};
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
                font-family: 'Scheherazade New', serif;
                font-size: ${fontSize.xLarge};
                color: ${color.black};
                padding: 15px;
            }
        }
    }

    &:hover .underline {
        display: inline-block;
    }
`;
