import mixins from '../base/_mixins'
import styled from "styled-components";

export const Container = styled.section`
    padding-top: 60px;
    padding-bottom: 60px;
    

    @media screen and (max-width: 600px) {
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 130px;
    }
`

export const Wrapper = styled.div`
  
    @media screen and (max-width: 600px) {
        padding-right: 15px;
        padding-left: 15px;
    }
`

export const Title = styled.h3`
    font-weight: 700;
    ${mixins.responsiveText(22, 42)};
    /* identical to box height, or 52px */
    color: #000000;
    text-align: ${({position}) => position || 'center'};
    margin-bottom: ${({marginB}) => marginB || 0};
    
    span {
        font-weight: 700;
        font-size: ${mixins.responsiveText(22, 42)};
        color: #6DB8FF;
        margin-left: 5px;
    }

    @media screen and (max-width: 992px) {
        text-align: center;
    }
`

export const SubText = styled.p`
    font-family: 'Circular Std';
    font-weight: 500;
    ${mixins.responsiveText(16, 20)};
    color: #000000;
    margin-top: 24px;
`

export const TokenomicsContainer = styled.div`
    ${mixins.flex('space-between', 'center', '')};
    margin-top: 60px;
    /* margin-bottom: 120px;  */
    /* flex-wrap: wrap; */
    /* gap: 60px; */
    img {
        max-width: 100%;
        display: block;
        height: auto;

        opacity: 0;
        transform: translateY(-100px);
        transition: 2s;

        &.animate {
            opacity: 1;
            transform: translateX(0);
        }
        
    }

    @media screen and (max-width: 1240px) {
        img {
            max-width: 50%;
        }
    }

    @media screen and (max-width: 992px) {
        img {
            max-width: 100%;
        }
        flex-wrap: wrap;
        justify-content: center;

        img:last-child {
            margin-top: 50px;
        }
    }
`