import mixins from '../../base/_mixins'
import styled from "styled-components";

export const Block = styled.div`
    ${mixins.flex('', 'center', '')};
    margin-top: 15px;
    justify-content: ${({position}) => position};
    
    a {
        font-weight: 700;
        font-size: 16px;
        line-height: 160%;
        /* identical to box height, or 26px */
        letter-spacing: 0.004em;
        text-decoration-line: underline;
        color: #000000;
        margin-right: 17.5px;

        
    }
    img {
        transition: 0.4s;
    }
    
    &:hover > img {
        transform: translateX(5px);
    }
`