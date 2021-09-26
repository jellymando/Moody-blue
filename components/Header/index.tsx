import React from 'react';
import Link from 'next/link';
import Image from '../Image';
import { menus } from '../../constants/layout';
import { Top, HeaderContainer, Logo, SideMenu, Bottom, NavContainer } from './styles';

const Header = () => {
    return (
        <div>
            <Top>
                <HeaderContainer>
                    <Logo>
                        <Link href="/">
                            <a>
                                <Image name="logo" className="logo" />
                            </a>
                        </Link>
                    </Logo>
                    <SideMenu>
                        <span className="icon">
                            <Image name="search" className="search_icon" />
                        </span>
                        <Link href="/cart">
                            <a className="icon">
                                <Image name="cart" className="cart_icon" />
                            </a>
                        </Link>
                    </SideMenu>
                </HeaderContainer>
            </Top>
            <Bottom>
                <NavContainer>
                    <ul>
                        {menus.map((menu) => {
                            return (
                                <li key={menu}>
                                    <Link href={`/${menu.toLowerCase()}`}>{menu}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </NavContainer>
            </Bottom>
        </div>
    );
};

export default Header;
