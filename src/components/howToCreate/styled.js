import mixins from '../base/_mixins'
import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    padding-bottom: 66px;
    padding-top: 70px;
    text-align: center;
    background: #FBFBFB;

    opacity: 0;
    transition: 2s;

    &.animate {
        opacity: 1;
    }
`

export const Wrapper = styled.div`
    ${mixins.flex('', '', '')};
    margin-top: 32px;
    gap: 83px;
    max-width: 669px;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    gap: 0;
    }
`

export const Title = styled.h3`
    font-weight: 700;
    ${mixins.responsiveText(22, 42)};
    line-height: 124%;
    /* identical to box height, or 52px */
    color: #000000;
    margin: 0 auto;
    max-width: 627px;
`

export const Text = styled.p`
    font-weight: 400;
    ${mixins.responsiveText(14, 16)};
    line-height: 160%;
    /* or 26px */
    color: #040404;
    margin: 10px 0 18px 0;
`

export const StepContainer = styled.div`
    max-width: 669px;
    margin: 0 auto;
    text-align: left;
    
    li {
        list-style-type: decimal;
        font-weight: 400;
        ${mixins.responsiveText(12, 16)};
        line-height: 240%;
        color: rgba(4, 4, 4, 0.8);
    }
`