import mixins from '../../base/_mixins'
import styled from "styled-components";

export const Block = styled.div`
    position: fixed;
    right: 0;
    top: 278px;
    width: 60px;
    height: 145px;
    background: #FFFFFF;
    box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.05);
    padding: 10px 0;
    z-index: 100;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const SocialButton = styled.a`
    padding: 10px 20px;
    ${mixins.flex('center', 'center', '')};

    &:hover > img {
        transition: 0.5s;
        transform: scale(1.1);
    }
`