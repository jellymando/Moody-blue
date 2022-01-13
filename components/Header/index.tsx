import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { debounce } from 'lodash';
import GoogleLogin from 'react-google-login';
import {
    Top,
    HeaderContainer,
    Logo,
    SideMenu,
    Menu,
    Image,
    LoginButton,
    Bottom,
    NavContainer,
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
            <Top>
                <HeaderContainer>
                    <Logo>
                        <Link href="/">
                            <a>
                                <Image src="/images/common/logo.png" className="logo" />
                            </a>
                        </Link>
                    </Logo>
                    <SideMenu>
                        <Menu>
                            <Image src="/images/common/search.png" className="search_icon" />
                        </Menu>
                        <Menu>
                            <Link href="/cart">
                                <a>
                                    <Image src="/images/common/cart.png" className="cart_icon" />
                                </a>
                            </Link>
                        </Menu>
                        <Menu>
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
