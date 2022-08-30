import mixins from '../base/_mixins'
import styled from "styled-components";

export const Container = styled.section`
    padding-bottom: 140px;
    padding-top: 80px;

    opacity: 0;
    transform: translateY(-100px);
    transition: 1s;

    &.animate {
        opacity: 1;
        transform: translateX(0);
    }

    @media screen and (max-width: 600px) {
        padding-bottom: 70px;
    }
`

export const Title = styled.h3`
    font-weight: 700;
    ${mixins.responsiveText(22, 42)};
    color: #000000;
    text-align: center;
`

export const AccordionWrapper = styled.div`
    max-width: 762px;
    margin: 69px auto 0 auto;
`
