import { Block } from './style';
import React from 'react'
import arrow from '../../../assets/instruction/arrow-right.png';

const More = ({text, link = '/', position = 'start'}) => {
  return (
    <Block position={position}>
        <a href={link}>{text}</a>
        <img src={arrow} alt="arrow" />
    </Block>
  )
}

export default More