import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { debounce } from 'lodash';
import GoogleLogin from 'react-google-login';
import {
    HeaderWrap,
    TopMenu,
    TopMenuWrapper,
    Logo,
    SideMenus,
    Icon,
    Image,
    LoginButton,
    Nav,
    NavWrapper,
    NavMenus,
    Menu,
    Underline,
} from './styled';

const menus = ['Outer', 'Top', 'Knit', 'Blouse', 'Dress', 'Skirt', 'Pants', 'Bag', 'Shoes', 'Accessory'];

const Header = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const [menu, setMenu] = useState({ left: 0, width: 0 });
    const responseGoogle = (response) => {
        console.log(response);
    };

    useEffect(() => {
        if (!navRef.current) return;
        const debounceMousemove = debounce((target) => {
            setMenu({ left: target.offsetLeft + target.offsetWidth / 4, width: target.offsetWidth / 2 });
        });

        const handleMousemove = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName !== 'A') return;
            debounceMousemove(target);
        };

        navRef.current.addEventListener('mousemove', handleMousemove);

        return () => {
            if (!navRef.current) return;
            navRef.current.removeEventListener('mousemove', handleMousemove);
        };
    }, []);

    return (
        <HeaderWrap>
            <TopMenu>
                <TopMenuWrapper>
                    <Logo>
                        <Link href="/">
                            <a>
                                <Image src="/images/common/logo.png" className="logo" />
                            </a>
                        </Link>
                    </Logo>
                    <SideMenus>
                        <Icon>
                            <Image src="/images/common/search.png" className="search_icon" />
                        </Icon>
                        <Icon>
                            <Link href="/cart">
                                <a>
                                    <Image src="/images/common/cart.png" className="cart_icon" />
                                </a>
                            </Link>
                        </Icon>
                        <Icon>
                            <Link href="/login">
                                <a>
                                    <Image src="/images/common/login.png" className="login_icon" />
                                </a>
                            </Link>
                            {/* <GoogleLogin
                                clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                                render={(renderProps) => (
                                    <LoginButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        <Image src="/images/common/login.png" className="login_icon" />
                                    </LoginButton>
                                )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            /> */}
                        </Icon>
                    </SideMenus>
                </TopMenuWrapper>
            </TopMenu>
            <Nav>
                <NavWrapper ref={navRef}>
                    <NavMenus>
                        {menus.map((menu) => {
                            return (
                                <Menu key={menu}>
                                    <Link href={`/${menu.toLowerCase()}`}>{menu}</Link>
                                </Menu>
                            );
                        })}
                    </NavMenus>
                    <Underline left={menu.left} width={menu.width} />
                </NavWrapper>
            </Nav>
        </HeaderWrap>
    );
};

export default Header;
