import styled from '@emotion/styled';
import { Container } from '../Container/styled';

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
        &:not(:first-child) {
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

export const Bottom = styled.div``;

export const NavContainer = styled(Container)`
    ul {
        display: flex;
        justify-content: space-between;
        padding: 0 5%;
    }
`;
