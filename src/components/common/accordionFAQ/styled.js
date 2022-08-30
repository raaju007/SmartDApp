import mixins from '../../base/_mixins'
import styled from "styled-components";

export const AccordionContainer = styled.div`
    ${mixins.flex('', '', 'column')};
    padding: 0 5px 0 5px;
    background: #FFFFFF;
    /* box-shadow: 4px 4px 12px 0px #0000000d; */
    width: 100%;
    cursor: pointer;

    border-bottom: ${({open}) => open ? 'none' : '1px solid #0000001a'};;

    /* @media screen and (max-width: 480px) {
        padding: 15px 5px 15px 5px;
    } */
`

export const AccordionHeader = styled.div`
    ${mixins.flex('', 'center', '')};
    width: 100%;
    transition: 0.3s;
    padding: 23px 0 23px 0;

    div {
        width: 25px;
        flex-shrink: 0;
        ${mixins.flex('center', 'center', '')};
    }
    img {
        transition: 0.3s;
    }

    @media screen and (max-width: 480px) {
        padding: 15px 0 15px 0;
    }
`

export const AccordionTitle = styled.h3`
    font-weight: 500;
    font-size: 16px;
    color: #040404;
    margin-left: 15px;
    z-index: 0;

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        margin-left: 5px;
    }
`

export const AccordionText= styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    /* or 19px */
    color: rgba(4, 4, 4, 0.8);
    margin-left: 40px;
    /* margin-top: 20px; */
    /* border-top: ${({open}) => open ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'}; */
    padding: ${({open}) => open ? '20px 0 0 0' : '0'};
    transition: 0.3s;
    opacity: ${({open}) => open ? 1 : 0};
    height: ${({open}) => open ? 'auto' : 0};

    @media screen and (max-width: 600px) {
        font-size: 14px;
        padding: ${({open}) => open ? '10px 0 0 0' : '0'};
    }

    @media screen and (max-width: 480px) {
        margin-left: 30px;
        font-size: 12px;
        
    }
`
