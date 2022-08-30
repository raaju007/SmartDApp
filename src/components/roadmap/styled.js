import dashed from '../../assets/whitepaper/dashed.png'
import mixins from '../base/_mixins'
import styled from "styled-components";

export const Container = styled.section`
    padding-top: 60px;
    padding-bottom: 120px;

    @media screen and (max-width: 600px) {
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 190px;
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

export const TimelineContainer = styled.div`
    position: relative;
    ${mixins.flex('center', 'center', '')};

    @media screen and (max-width: 1240px) {
        
    }
`

export const TimelineTextContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 40px 80px #F5F5F5;
    border-radius: 20px;
    padding: 24px 20px;
    margin: 20px 34px;
    width: 481px;
    z-index: 10;

    opacity: 0;
    transform: translateY(200px);
    transition: 1s;

    &.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    li {
        font-weight: 400;
        font-size: ${mixins.responsiveText(13, 16)};
        line-height: 240%;
        color: rgba(4, 4, 4, 0.8);
    }

    @media screen and (max-width: 1240px) {
        order: 3;
    }

    @media screen and (max-width: 992px) {
       max-width: 481px;
       margin: 20px 0 20px 34px;
    }

    @media screen and (max-width: 600px) {
       max-width: 481px;
       margin: 20px 0 100px 0;
    }
`

export const TimelineTitle = styled.h6`
    font-family: 'Circular Std';
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: #000000;
    margin: 0 58px;
    text-align: ${({position}) => position || 'right'};;
    width: 433px;
    box-sizing: border-box;

    opacity: 0;
    transform: translateY(-200px);
    transition: 1s;

    &.animate {
        opacity: 1;
        transform: translateY(0);
    }

    @media screen and (max-width: 1240px) {
        order: 1;
        width: 120px;
        margin: 0 58px 0 0;
    }

    @media screen and (max-width: 992px) {
       display: none;
    }
`

export const TimelineDone = styled.div`
    position: relative;
    
    div {
        width: 44px;
        height: 44px;
        background: #6DB8FF;
        border: 3px solid #FFFFFF;
        border-radius: 50%;
        box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.05);
        ${mixins.flex('center', 'center', '')};
        flex-shrink: 0;

        opacity: 0;
        transform: scale(0.3);
        transition: 2s;

        &.animate {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    &:after {
        content: '';
        position: absolute;
        bottom: 22px;
        left: 0;
        right: 0;
        width: 3px;
        margin: 0 auto;
        height: 195px;
        background: #6DB8FF;
        z-index: -1;
    }
   
    &:before {
        content: ${({last}) => last ? `url(${dashed})` : "''"};
        position: absolute;
        top: 22px;
        left: 0;
        right: 0;
        width: ${({last}) => last ? '16px' : '3px'};
        margin: 0 auto;
        height: 195px;
        background: ${({last}) => last ? 'transparent' : '#6DB8FF'};;
        z-index: -1;
    }

    @media screen and (max-width: 1240px) {
        order: 2;
    }

    @media screen and (max-width: 992px) {
        div {
            &:before {
                height: 300px;
            }
        }
        
    }

    @media screen and (max-width: 600px) {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 15px;
        margin: 0 auto;
        width: 44px;
        
    }
`