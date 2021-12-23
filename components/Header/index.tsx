import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { debounce } from 'lodash';
import GoogleLogin from 'react-google-login';
import Image from '../Image';
import { menus } from '../../constants/layout';
import { Top, HeaderContainer, Logo, SideMenu, Menu, LoginButton, Bottom, NavContainer, Underline } from './styled';

const Header = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const [menu, setMenu] = useState({ left: 0, width: 0 });

    useEffect(() => {
        if (!navRef.current) return;
        const debounceMousemove = debounce((target) => {
            setMenu({ left: target.offsetLeft, width: target.offsetWidth });
        });

        navRef.current.addEventListener('mousemove', (e) => {
            const target = e.target as HTMLElement;
            if (target.tagName !== 'A') return;
            debounceMousemove(target);
        });

        return () => {
            navRef.current.removeEventListener('mousemove', (e) => {
                debounceMousemove(e);
            });
        };
    }, []);

    return (
        <>
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
                        <Menu>
                            <Image name="search" className="search_icon" />
                        </Menu>
                        <Menu>
                            <Link href="/cart">
                                <a>
                                    <Image name="cart" className="cart_icon" />
                                </a>
                            </Link>
                        </Menu>
                        <Menu>
                            <GoogleLogin
                                clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                                render={(renderProps) => (
                                    <LoginButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        <Image name="login" className="login_icon" />
                                    </LoginButton>
                                )}
                                cookiePolicy={'single_host_origin'}
                            />
                        </Menu>
                    </SideMenu>
                </HeaderContainer>
            </Top>
            <Bottom>
                <NavContainer ref={navRef}>
                    <ul>
                        {menus.map((menu) => {
                            return (
                                <li key={menu}>
                                    <Link href={`/${menu.toLowerCase()}`}>{menu}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <Underline left={menu.left} width={menu.width} />
                </NavContainer>
            </Bottom>
        </>
    );
};

export default Header;
