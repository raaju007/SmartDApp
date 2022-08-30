import mixins from '../base/_mixins'
import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    padding-bottom: 120px;
    text-align: center;

    opacity: 0;
    transform: translateY(200px);
    transition: 1s;

    &.animate {
        opacity: 1;
        transform: translateY(0);
    }
`

export const Title = styled.h3`
    font-weight: 700;
    ${mixins.responsiveText(26, 42)};
    line-height: 124%;
    /* identical to box height, or 52px */
    color: #000000;
    text-align: center;
`

export const Text = styled.p`
    font-weight: 400;
    ${mixins.responsiveText(14, 16)};
    line-height: 160%;
    /* or 26px */
    color: #040404;
    margin: 24px 0 43px 0;
`

export const CardWrapper = styled.div`
    ${mixins.flex('center', '', '')};
    gap: 72px 32px;
    flex-wrap: wrap;
    margin-top: 102px;

    @media screen and (max-width: 600px) {
       margin-top: 50px;
    }
`

export const CardContainer = styled.div`
    ${mixins.flex('center', 'center', 'column')};
    max-width: 365px;
    min-width: 300px;

    opacity: 0;
    transform: translateY(100px);
    transition: 1.5s;

    &.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    @media screen and (max-width: 480px) {
        min-width: 270px;
    }
`

export const CardImage = styled.img`
    width: 100%;
    /* height: 260px; */
    border-radius: 12px;
    overflow: hidden;
    transition: 0.3s;
    cursor: pointer;
    object-fit: contain;
    box-shadow: 0px 60px 100px #7aa9c81a;

    &:hover {
        transform: translateY(3px)
    }
`

export const CardText = styled.p`
    font-weight: 700;
    font-size: 20px;
    /* identical to box height, or 32px */
    color: #1E2532;
    margin-top: 10%;
    
`