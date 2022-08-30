import {Anchor, Button, Image, NavWrapper, Wrapper} from "./styled";

import Logo from '../../assets/icons/logo.svg'
import React from 'react';

const routes = [
    {to: 'home', title: 'Home'},
    {to: 'creation', title: 'Creation'},
    {to: 'instruction', title: 'Instruction'},
    {to: 'tokenomics', title: 'Tokenomics'},
    {to: 'roadmap', title: 'Roadmap'},
    {to: 'whitepaper', title: 'Whitepaper'},
]

const Nav = ({isOpen, closeHandle}) => {

    const openClass = isOpen ? 'open' : ''

    return (
        <Wrapper className={`menu__wrapper anim_item`}>
            <Image src={Logo} style={{overflow:"hidden"}}/>
            <NavWrapper className={`${openClass}`}>
                {routes.map((item, id) => <Anchor
                    key={id * 10}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={id  === 0 ? -100 : 0}
                    onClick={closeHandle}
                    duration={1500} to={item.to}>{item.title}</Anchor>)}
            </NavWrapper>
            <a href="https://Smartdapp-platform-naytin.vercel.app/" target="_blank" rel="noreferrer">
            <Button>
                Launch DApp
            </Button>
            </a>
        </Wrapper>
    );
};

export default Nav;

