import mixins from '../base/_mixins'
import styled from "styled-components";

export const Container = styled.section`
    padding-bottom: 80px;

    @media screen and (max-width: 600px) {
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 190px;
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


export const ImageContainer = styled.div`
    ${mixins.flex('center', 'center', '')};
    overflow: hidden;
    width: 90%;
    margin: 48px auto 0 auto;
    /* margin-top: 48px; */
    padding: 0 20px;
    
    img {
        max-width: 100%;
        display: block;
        height: auto;

        &:first-child {
            margin-right: -120px;
            opacity: 0;
            transform: translateX(-100%);
            transition: 1s;

            &.animate {
                opacity: 1;
                transform: translateX(0);
            }
        }

        &:last-child {
            opacity: 0;
            transform: translateX(100%);
            transition: 1s;

            &.animate {
                opacity: 1;
                transform: translateX(0);
            }
        }

        
    }

    @media screen and (max-width: 1024px) {
        flex-wrap: wrap;
        img {
            &:first-child {
                margin-right: 0;
                margin-bottom: -100px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: 0;
        width: 100%;

        img {
            &:first-child {
                margin-bottom: -50px;
            }
        }
    }

    @media screen and (max-width: 414px) {
        padding: 0;
        width: 100%;

        img {
           max-width: 360px;
        }
    }
`