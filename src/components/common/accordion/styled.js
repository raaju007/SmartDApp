import mixins from '../../base/_mixins'
import styled from "styled-components";

export const AccordionContainer = styled.div`
    ${mixins.flex('', '', 'column')};
    padding: 20px 30px 0 20px;
    background: #FFFFFF;
    box-shadow: 4px 4px 12px 0px #0000000d;
    width: 100%;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        padding: 20px 10px 0 10px;
    }
`

export const AccordionHeader = styled.div`
    ${mixins.flex('space-between', 'center', '')};
    width: 100%;
    cursor: pointer;
    transition: 0.3s;

    img {
        transition: 0.3s;
        opacity: ${({open}) => open ? 1 : 0.5};
        transform: rotate(${({open}) => open ? 0 : '180deg'});
    }
`

export const AccordionTitle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    color: ${({open}) => open ? '#1E2532' : '#1e2532b3'};;
    
    span {
        width: 85px;
        height: 25px;
        background: rgba(109, 184, 255, 0.12);
        border-radius: 6px;
        padding: 3px 10px;
        font-family: 'Circular Std';
        font-weight: 500;
        font-size: 14px;
        color: #309AFF;
        margin-left: 7px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const AccordionText= styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */
    color: rgba(4, 4, 4, 0.6);
    margin-top: 20px;
    border-top: ${({open}) => open ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'};
    padding: ${({open}) => open ? '20px 0' : '0'};
    transition: 0.3s;
    opacity: ${({open}) => open ? 1 : 0};
    height: ${({open}) => open ? 'auto' : 0};
`
