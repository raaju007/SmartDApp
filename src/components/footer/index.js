import { ButtonWrapper, Container, Flex, Instagram, Link, Social, SocialWrapper, SubTitle, Text, Title, Wrapper } from './styled'

import React from 'react'
import apple from '../../assets/icons/applePay.svg';
import google from '../../assets/icons/googlePay.svg';

const Footer = () => {
  return (
    <Container className="container">
        <Wrapper>
            <Flex className='title__block'>
                <Title>SmartDApp</Title>
                <Link>Open an account in minutes,<br /> get full Control for much longer. </Link>
            </Flex>
            <Wrapper className='links__block'>
            <Flex>
                <SubTitle>Company</SubTitle>
                <Link>Creation</Link>
                <Link>Instruction</Link>
                <Link>Roadmap</Link>
                <Link>Whitepaper</Link>
                <Link>Launch dApp</Link>
            </Flex>
            <Flex>
                <SubTitle>Contact</SubTitle>
                <Link>Help/FAQ</Link>
                <Link>News</Link>
                <Link>Support</Link>
            </Flex>
            <Flex>
                <SubTitle>More</SubTitle>
                <Link>Airline fees</Link>
                <Link>Airlines</Link>
                <Link>Low fare tips</Link>
            </Flex>
            </Wrapper>
            <Flex className='button__block'>
                <SubTitle>Discover Our App</SubTitle>
                <ButtonWrapper>
                    <a href="/">
                        <img src={google} alt="google" />
                    </a>
                    <a href="/">
                        <img src={apple} alt="google" />
                    </a>
                </ButtonWrapper>
                <SocialWrapper>
                    <a href="/">
                        <Social>
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.69451 15.1975L3.67404 8.93825H0.996094V6.25571H3.67404V4.46735C3.67404 2.05377 5.16611 0.890625 7.31549 0.890625C8.34506 0.890625 9.22993 0.967408 9.4878 1.00173V3.52405L7.9971 3.52473C6.82815 3.52473 6.60181 4.08115 6.60181 4.89766V6.25571H9.92257L9.02993 8.93825H6.6018V15.1975H3.69451Z" fill="#6DB8FF"/>
                            </svg>
                        </Social>
                    </a>
                    <a href="/">
                        <Instagram>
                            <span/>
                        </Instagram>
                    </a>
                    <a href="/">
                        <Social>
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2431 2.22408C14.7075 2.49234 14.1719 2.58175 13.547 2.67117C14.1719 2.3135 14.6182 1.77699 14.7967 1.06165C14.2612 1.41932 13.6363 1.59816 12.9222 1.77699C12.3866 1.24048 11.5832 0.882812 10.7798 0.882812C9.26232 0.882812 7.92335 2.22408 7.92335 3.83361C7.92335 4.10186 7.92335 4.2807 8.01261 4.45953C5.60246 4.37012 3.37084 3.20768 1.94261 1.41932C1.67481 1.86641 1.58555 2.3135 1.58555 2.93943C1.58555 3.92303 2.12114 4.81721 2.92452 5.35371C2.4782 5.35371 2.03187 5.17488 1.58555 4.99604C1.58555 6.42673 2.56746 7.58916 3.90643 7.85742C3.63864 7.94684 3.37084 7.94684 3.10305 7.94684C2.92452 7.94684 2.74599 7.94684 2.56746 7.85742C2.92452 9.01985 3.9957 9.91403 5.33467 9.91403C4.35276 10.7188 3.10305 11.1659 1.67481 11.1659C1.40702 11.1659 1.22849 11.1659 0.960693 11.1659C2.29967 11.9706 3.81717 12.5072 5.42393 12.5072C10.7798 12.5072 13.7256 8.03625 13.7256 4.19128C13.7256 4.10186 13.7256 3.92303 13.7256 3.83361C14.3504 3.38652 14.886 2.85001 15.2431 2.22408Z" fill="#6DB8FF"/>
                            </svg>
                        </Social>
                    </a>
                </SocialWrapper>  
            </Flex>
                      
        </Wrapper>
        <hr />
        <Text>All rights reserved @SmartDApp</Text>
    </Container>
  )
}

export default Footer