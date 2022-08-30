import instagram from '../../assets/icons/instagram.svg';
import instagramWhite from '../../assets/icons/instagramWhite.svg'
import mixins from '../base/_mixins'
import styled from "styled-components";

export const Container = styled.footer`
    @media screen and (max-width: 1440px) {
        padding: 0 70px;
    }

    hr {
        width: 100%;
        height: 1px;
        background: rgba(105, 120, 131, 0.4);
        border: none;
        margin-top: 30px;
    }
`

export const Wrapper = styled.div`
    ${mixins.flex('space-between', '', '')};
    gap: 30px;
    
    .links__block {
        max-width: 500px;
        width: 100%;
    }
    
    @media screen and (max-width: 992px) {
        flex-direction: column;
        align-items: center;
        
        .title__block {
            order: 1;
            h3 {
                text-align: center;
                margin: 0 auto 21px auto;
            }
        }
        .links__block {
            order: 2;
            flex-direction: row;
            align-items: flex-start;
        }
        .button__block {
            order: 3;
            align-items: center;
        }
    }

    @media screen and (max-width: 480px) {
        gap: 15px;
    }
`

export const Flex = styled.div`
    ${mixins.flex('', '', 'column')};
`


export const Title = styled.h3`
    font-weight: 700;
    ${mixins.responsiveText(24, 48)};
    color: #000000;
    margin-bottom: 21px;
`

export const SubTitle = styled.h4`
    font-weight: 700;
    ${mixins.responsiveText(18, 24)};
    color: #000000;
    margin-bottom: 8px;
`

export const Text = styled.p`
    font-weight: 400;
    ${mixins.responsiveText(16, 16)};
    line-height: 160%;
    /* or 26px */
    color: #040404;
    padding: 20px 0 26px 0;
    text-align: center;

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`

export const Link = styled.a`
    font-weight: 400;
    ${mixins.responsiveText(16, 16)};
    line-height: 160%;
    color: #040404;
    margin: 0 0 15px 0;
    transition: 0.4s;

    &:hover {
        opacity: 0.7;
    }

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`

export const ButtonWrapper = styled.div`
    ${mixins.flex('space-between', '', '')};
    margin-top: 24px;
    gap: 10px;
    img {
        transition: 0.4s;
        &:hover {
            opacity: 0.7;
        }
    }
`

export const SocialWrapper = styled.div`
    ${mixins.flex('space-between', '', '')};
    max-width: 200px;
    width: 100%;
    margin-top: 35px;
`

export const Social = styled.div`
    ${mixins.flex('center', 'center', '')};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #6DB8FF;
    transition: 0.5s;
    &:hover {
        background: #6DB8FF;
        border: transparent;
    }

    &:hover > svg path{
        transition: 0.5s;
        fill: #fff;
    }
`

export const Instagram = styled.div`
    ${mixins.flex('center', 'center', '')};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #6DB8FF;
    transition: 0.5s;
    
    span {
        transition: 0.4s;
        background: url(${instagram});
        width: 20px;
        height: 20px;
    }

    &:hover {
        background: #6DB8FF;
        border: transparent;
        span {
            background: url(${instagramWhite});
        }
    }
`

