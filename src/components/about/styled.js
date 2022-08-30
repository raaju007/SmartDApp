import mixins from '../base/_mixins'
import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    padding-top: 250px;

    opacity: 0;
    transform: translateY(200px);
    transition: 1s;

    &.animate {
        opacity: 1;
        transform: translateY(0);
    }

    @media screen and (max-width: 1240px) {
        padding-top: 20%;
    }

    @media screen and (max-width: 992px) {
        padding-top: 30%;
    }

    @media screen and (max-width: 768px) {
        padding-top: 40%;
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 35px 0 0;
    max-width: 1440px;

    img {
        max-width: 100%; 
        width: 60%;
        display: block; 
        height: auto;
    }

    @media screen and (min-width: 1440px) {
        padding: 0 115px 0 0;
        margin: 0 auto;
    }

    @media screen and (max-width: 1024px) {
        padding: 0 24px 0 0;

        img {
            width: 45%;
        }
    }

    @media screen and (max-width: 992px) {
        flex-direction: column;

        img {
            width: 70%;
        }
    }

    @media screen and (max-width: 600px) {
        padding: 0;
    }
`

export const PrimaryButton = styled.button`
    width: 153px;
    height: 50px;
    background: #6DB8FF;
    border-radius: 25px;

    font-family: 'Circular Std';
    font-size: 16px;
    line-height: 160%;
    /* identical to box height, or 26px */

    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    transition: 0.4s;

    &:hover {
        background: #6db8ffb3;
    }
`

export const Button = styled.button`
    width: 178px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 25px;
    box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.05);
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
    }
`


export const TextContainer = styled.div`
    margin: 27px 0 0 41px;

    @media screen and (max-width: 600px) {
        margin: 40px 0 0 0;
        width: 100%;
        padding: 0 25px;
    }
`

export const Block = styled.div`
   display: flex;
   flex-direction: ${({direction}) => direction || 'column'};
   margin-left: ${({marginL}) => marginL || 0};

    @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        margin: 0;     
        
        button {
            margin-bottom: 20px;
        }
    }
`

export const Title = styled.h3`
    font-weight: 700;
    ${mixins.responsiveText(26, 42)};
    line-height: 124%;
    /* identical to box height, or 52px */
    color: #000000;
`

export const Text = styled.p`
    font-weight: 400;
    ${mixins.responsiveText(14, 16)};
    line-height: 160%;
    /* or 26px */
    color: #040404;
    margin: 33px 0 60px 0;
`

export const SubText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    /* or 26px */
    color: rgba(4, 4, 4, 0.8);
    margin-bottom: 16px;
`

export const BrandsContainer = styled.div`
    max-width: 1050px;
    padding: 0 35px 0 35px;
    margin: 0 auto;
    
    img {
        margin: 0 auto;
    }    
`

export const ImageContainer = styled.div`

`