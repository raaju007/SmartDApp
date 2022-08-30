import React, {useState} from 'react';

import Nav from "../nav";
import styled from "styled-components";

// import Hero from "../hero";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    function burger(e) {
        e.stopPropagation()
        e.target.parentElement.classList.toggle("open");
        setIsOpen(!isOpen)
    }

    const handleClose = () => {
        document.querySelector('.burger').classList.remove('open')
        setIsOpen(false)
    }

    // useEffect(() => {
    //     const root = document.getElementById('root')
    //     if (isOpen) {
    //         root.classList.add("open")
    //     } else {
    //         root.classList.remove("open")
    //     }
    // },[isOpen])

    return (
        <>
            <Nav isOpen={isOpen} closeHandle={handleClose}/>
            <div className='container'>
                <section id='home'>
                    <Burger className='burger'>
                        <span onClick={burger}/>
                    </Burger>
                    {/* <Hero/> */}
                </section>
            </div>
        </>
    );
};

export default Header;

export const Burger = styled.div`
  position: fixed;
  top: 65px;
  right: 29px;
  z-index: 100;
  display: none;
  width: 35px;
  height: 5px;
  background-color: #333;
  
  span {
    cursor: pointer;
    position: absolute;
    top: -12px;
    display: block;
    width: 35px;
    height: 30px;
    z-index: 1000;
  }

  &:after, &:before {
    transition: 0.4s;
    content: '';
    position: absolute;
    left: 0;
    background-color: #333;
    width: 35px;
    height: 5px;

  }

  &:after {
    top: -10px;
  }

  &:before {
    top: 10px;
  }

  &.open {
    background-color: transparent;

    &:after {
      -webkit-transform: rotate(-45deg) translate(-7px, 7px);
      transform: rotate(-45deg) translate(-7px, 7px);
    }

    &:before {
      top: 10px;
      -webkit-transform: rotate(45deg) translate(-7px, -7px);
      transform: rotate(45deg) translate(-7px, -7px);
    }
  }

  @media screen and (max-width: 600px) {
    display: block;
  }
`