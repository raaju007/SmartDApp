import mixins from '../base/_mixins'
import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    padding-bottom: 120px;
    padding-left: 35px;
    max-width: 1440px;
    margin: 0 auto 128px auto;

    @media screen and (min-width: 1440px) {
       padding-left: 135px;
    }
    
    @media screen and (max-width: 1200px) {
       margin-bottom: 0;
    }

    @media screen and (max-width: 768px) {
        padding-right: 35px;
    }

    @media screen and (max-width: 600px) {
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 70px;
    }
`

export const Title = styled.h3`
    font-weight: 700;
    ${mixins.responsiveText(26, 42)};
    line-height: 124%;
    /* identical to box height, or 52px */
    color: #000000;
    text-align: left;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

export const Text = styled.p`
    font-weight: 400;
    ${mixins.responsiveText(16, 16)};
    line-height: 160%;
    /* or 26px */
    color: #040404;
    margin: 48px 0 32px 0;
`

export const Wrapper = styled.div`
    ${mixins.flex('space-between', '', '')};

    opacity: 0;
    transform: translateY(200px);
    transition: 1s;

    &.animate {
        opacity: 1;
        transform: translateY(0);
    }

    @media screen and (max-width: 768px) {
        justify-content: center; 
    }
`

export const ImageContainer = styled.div`
    position: relative;
    max-width: 760px;
    
    img {
        max-width: 100%;
        display: block;
        height: auto;
    }
    .scan {
        position: absolute;
        top: -130px;
        right: 45px;
    }

    @media screen and (max-width: 1200px) {
        .scan {
            max-width: 200px;
            top: -50px;
            right: 20px;
        }   
    }

    @media screen and (max-width: 768px) {
        display: none; 
    }
`

export const AccordionWrapper = styled.div`
    ${mixins.flex('', '', 'column')};
    margin-top: 40px;
    max-width: 460px;
    min-width: 400px;

    @media screen and (max-width: 600px) {
        min-width: 270px;
    }
`


export const PromoteWrapper = styled.div`
    ${mixins.flex('space-between', 'center', '')};
    padding: 0 35px 0 0;
    /* max-width: 1440px;
    margin: 0 auto; */

    opacity: 0;
    transform: translateY(200px);
    transition: 2s;

    &.animate {
        opacity: 1;
        transform: translateY(0);
    }

    @media screen and (min-width: 1440px) {
       padding: 0 135px 0 0;
    }

    @media screen and (max-width: 1200px) {
       margin-top: 80px;
    }


    @media screen and (max-width: 992px) {
        flex-direction: column;
        padding: 0 0 0 0;
    }

`

export const PromoteTextContainer = styled.div`
    ${mixins.flex('', '', 'column')};
    max-width: 50%;
    margin-left: 50px;

    @media screen and (max-width: 992px) {
        max-width: 80%;
        margin-left: 0;
    }
    @media screen and (max-width: 600px) {
       max-width: 90%;
    }
`

export const PromoteImageContainer = styled.div`
    position: relative;
    width: 50%;
    
    img {
        max-width: 100%;
        display: block;
        height: auto;
    }
    .promote {
        /* max-width: 563px; */
    }
    
    .chat {
        position: absolute;
        bottom: -250px;
        left: 90px;
    }

    @media screen and (max-width: 1200px) and (min-width: 992px) {
        .chat {
            max-width: 400px;
            bottom: -100px;
            right: 20px;
        }   
    }

    @media screen and (max-width: 992px) {
        margin-bottom: 100px;
        width: 80%;
        .chat {
            display: none;
        }  
    }

    @media screen and (max-width: 600px) {
        margin-bottom: 30px;
        width: 90%; 
    }

`