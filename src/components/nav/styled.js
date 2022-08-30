import { Link } from "react-scroll";
import styled from "styled-components";

export const Button = styled.button`
    width: 158px;
    height: 42px;
    left: 1147px;
    top: 40px;

    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 21px;

    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    color: #1E2532;
    transition: 0.4s;

    &:hover {
        background: #ffffffcc;
        border: 1px solid #ffffffcc;
    }

    @media screen and (max-width: 1200px) {
        order: 2;
    }

    @media screen and (max-width: 600px) {
        margin-top: 20px;
        order: 1;
    }
`

export const Image = styled.img`
    /* @media screen and (max-width: 1200px) {
        width: 170px;
    } */

    @media screen and (max-width: 1200px) {
        order: 1;
    }

    /* @media screen and (max-width: 600px) {
        margin-top: 20px;
    } */

`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 38px 30px 0 30px;
    max-width: 1170px;
    margin: 0 auto;

    @media screen and (max-width: 1200px) {
        max-width: 628px;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        padding: 38px 0 0 0;
    }
`

export const NavWrapper = styled.div`
  max-width: 628px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

    @media screen and (max-width: 1200px) {
        margin-top: 20px;
        order: 3;
    }
  
    @media screen and (max-width: 600px) {
        position: fixed;
        top: 0;
        bottom: 0;
        padding: 66px 26px 0 26px;
        flex-direction: column;
        justify-content: flex-start;
        border: none;
        min-height: calc(var(--vh,1vh) * 100);
        margin-top: 0;
        max-width: 100%;
        z-index: 100;

        transition: 0.5s;
        background: #6DB8FF;
        transform: translateX(-120%);

        &.open {
            transform: translateX(0);
        }
    }
`

export const Anchor = styled(Link)`
    position: relative;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    overflow: hidden;

    &:after {
        transition: 0.5s;
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: #fff;
        transform: translateX(-20px);
    }

    &:hover {
        color: #fff;
        
        &:after {
            width: 100%;
            transform: translateX(0);
        }
    }
    /* &.active {
        color: #fff;
        
        &:after {
            width: 11px;
            transform: translateX(0);
        }
    } */

    &:hover {
        color: #fff;
    }

    

    @media screen and (max-width: 600px) {
        font-size: 34px;
        line-height: 42px;

        span {
        display: block;
        }

        &:not(:first-child) {
        margin-top: 50px;
        }
    }
`