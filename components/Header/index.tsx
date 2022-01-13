import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { debounce } from 'lodash';
import GoogleLogin from 'react-google-login';
import {
    HeaderTop,
    HeaderContainer,
    Logo,
    SideMenus,
    Icon,
    Image,
    LoginButton,
    Nav,
    NavContainer,
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
            <HeaderTop>
                <HeaderContainer>
                    <Logo>
                        <Link href="/">
                            <Image src="/images/common/logo.png" className="logo" />
                        </Link>
                    </Logo>
                    <SideMenus>
                        <Icon>
                            <Image src="/images/common/search.png" className="search_icon" />
                        </Icon>
                        <Icon>
                            <Link href="/cart">
                                <Image src="/images/common/cart.png" className="cart_icon" />
                            </Link>
                        </Icon>
                        <Icon>
                            <GoogleLogin
                                clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                                render={(renderProps) => (
                                    <LoginButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        <Image src="/images/common/login.png" className="login_icon" />
                                    </LoginButton>
                                )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </Icon>
                    </SideMenus>
                </HeaderContainer>
            </HeaderTop>
            <Nav>
                <NavContainer ref={navRef}>
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
                </NavContainer>
            </Nav>
        </>
    );
};

export default Header;
