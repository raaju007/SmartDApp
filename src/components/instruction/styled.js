import mixins from '../base/_mixins'
import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    padding-top: 120px;
    padding-bottom: 120px;

    opacity: 0;
    transform: translateY(200px);
    transition: 1.5s;

    &.animate {
        opacity: 1;
        transform: translateX(0);
    }
`


export const Title = styled.h3`
    font-weight: 700;
    ${mixins.responsiveText(26, 42)};
    line-height: 124%;
    /* identical to box height, or 52px */
    color: #000000;
    text-align: left;
`

export const Text = styled.p`
    font-weight: 400;
    ${mixins.responsiveText(14, 16)};
    line-height: 160%;
    /* or 26px */
    color: #040404;
    margin: 24px 0 0 0;
`

export const Wrapper = styled.div`
    ${mixins.flex('space-between', '', '')};
`

export const CardContainer = styled.div`
    ${mixins.flex('space-between', '', 'column')};
    width: 50%;

    @media screen and (max-width: 992px) {
        width: 100%;
        justify-content: cenetr;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    
    img {
        max-width: 100%;
        display: block;
        height: auto;
    }

    .pen {
        position: absolute;
        bottom: -60px;
        left: 45px;
    }

    @media screen and (max-width: 992px) {
        display: none;
    }
`

export const Card = styled.div`
    max-width: 506px;
    min-width: 450px;
    background: #FFFFFF;
    border: 0.666667px solid #F6F9FB;
    box-shadow: ${({first}) => first ? '4.66667px 32.6667px 46.6667px rgba(83, 117, 134, 0.08)' : 'none'};
    margin: ${({first}) => first ? '47px 0 23px 0' : '0 0 23px 0'};
    padding: 16px 19px 26px 19px;
    ${mixins.flex('', '', '')};

    div.image {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        padding: 0 12px;
        background: #F6F9FB;
        ${mixins.flex('center', 'center', '')};
    }

    @media screen and (min-width: 1440px) {
       min-width: 506px;
    }

    @media screen and (max-width: 600px) {
        min-width: 270px;
    }

    @media screen and (max-width: 375px) {
        padding: 16px 10px 26px 10px;
    }
`

export const TextContainer = styled.div`
    ${mixins.flex('', '', 'column')};
    margin-left: 16px;
`

export const CardTitle = styled.h4`
    font-weight: 700;
    ${mixins.responsiveText(15, 20)};
    line-height: 160%;
    /* identical to box height, or 32px */
    color: #1E2532;
    margin-bottom: 10px;
`

export const CardText = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */
    color: rgba(30, 37, 50, 0.6);
`
