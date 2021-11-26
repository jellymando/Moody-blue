import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { debounce } from 'lodash';
import Image from '../Image';
import { menus } from '../../constants/layout';
import { Top, HeaderContainer, Logo, SideMenu, Bottom, NavContainer, Underline } from './styled';

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
