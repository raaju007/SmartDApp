import bg from '../../assets/hero/heroBg2.svg'
import mixins from '../base/_mixins'
import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    background-image: url(${bg});
    height: 950px;
    background-color: #c603fc;

    opacity: 0;
    transition: 1s;

    &.animate {
        opacity: 1;
    }

    @media screen and (max-width: 1380px) {
        background-size: contain;
    }

    @media screen and (max-width: 992px) {
        height: 850px;
    }

    @media screen and (max-width: 768px) {
        height: 700px;
    }
`

export const Markup = styled.div`
    position: absolute;
    top: 505px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 0 175px;
    height: 645px;

    opacity: 0;
    transform: translateY(200px);
    transition: 1.5s;

    &.animate {
        opacity: 1;
        transform: translateY(0);
    }

    img {
        max-width: 100%; 
        display: block; 
        height: auto;
        position: absolute;
        
    }
    div {
        position: relative;
        max-width: 900px;
        width: 100%; 
        display: block; 
        /* min-height: 645px; */
        height: auto;
        margin: 0 auto;
    }

    .main {
        left: 0;
        right: 0;
        box-shadow: 0px 60px 100px #7aa9c833;
        position: relative;
        margin-top: 10px;
    }

    .chat {
        left: -220px;
        bottom: -130px;
    }

    .scan {
        right: -220px;
        bottom: 67px;
    }

    .pen {
        right: 117px;
        top: 20px;
    }

    .tool {
        top: 150px;
        left: 165px;
    }

    @media screen and (max-width: 1200px) {
        .scan, .chat {
            display: none;
        }
        padding: 0 135px;
    }

    @media screen and (max-width: 992px) {
        .pen, .tool {
            display: none;
        }

        padding: 0 70px;
    }

    @media screen and (max-width: 768px) {
        .pen, .tool {
            display: none;
        }

        padding: 0 35px;
    }

    @media screen and (max-width: 480px) {
        padding: 0 20px;
        
    }

    @media screen and (max-width: 375px) {
        margin-top: 20px;
    } 
`

export const Title = styled.h1`
    font-weight: 700;
    ${mixins.responsiveText(24, 48)};
    line-height: 120%;
    /* or 58px */
    text-align: center;
    letter-spacing: -0.5px;
    max-width: 952px;
    color: #FFFFFF;
    padding: 0 35px;
    margin: 80px auto 0 auto;

    opacity: 0;
    transform: translateX(100%);
    transition: 1.5s;

    &.animate {
        opacity: 1;
        transform: translateX(0);
    }

    @media screen and (max-width: 600px) {
        margin-top: 40px;
        padding: 0 10px;
    }
`

export const Text = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    /* or 29px */
    text-align: center;
    letter-spacing: 0.004em;
    color: rgba(255, 255, 255, 0.9);
    margin: 40px auto 0 auto;
    max-width: 856px;
    padding: 0 35px;

    opacity: 0;
    transform: translateX(-100%);
    transition: 1.5s;

    &.animate {
        opacity: 1;
        transform: translateX(0);
    }

    @media screen and (max-width: 600px) {
        margin-top: 20px;
        padding: 0 10px;
    }
`

export const ButtonSolid = styled.button`
    max-width: 156px;
    height: 50px;
    border: 2px solid #FFFFFF;
    border-radius: 25px;

    font-family: 'Circular Std';
    font-size: 16px;
    /* or 16px */
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    background: transparent;
    padding: 0 20px 0 32px;
    transition: 0.4s;

    &:hover {
        border: 2px solid #d2e6fa69;
        div {
            img {
                transition: 0.5s;
                transform: rotate(20deg);
            }
        }
    }

    div {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #FFFFFF;
        margin-left: 10px;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 414px) {
        font-size: 15px;
        padding: 0 15px;
    }

    @media screen and (max-width: 320px) {
       font-size: 13px;
    }
`

export const ButtonContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    max-width: 366px;
    margin: 32px auto 0 auto;

    @media screen and (max-width: 414px) {
        padding: 0 10px;
        gap: 10px;
    }
    
`

export const Button = styled.button`
    max-width: 178px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 25px;

    font-family: 'Circular Std';
    font-size: 16px;
    /* or 16px */
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: -0.5px;
    color: #1E2532;
    padding: 0 20px 0 30px;
    transition: 0.4s;

    &:hover {
        background: #ffffffcc;
    
        div {
            img {
                transition: 0.5s;
                transform: translateX(3px);
            }
        }
    }

    div {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #6DB8FF;
        
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }

    @media screen and (max-width: 414px) {
       font-size: 15px;
       padding: 0 15px;
    }

    @media screen and (max-width: 320px) {
       font-size: 13px;
    }
`