import {Container, ImageContainer, Title} from './styled'

import React from 'react'
import privateSale from '../../assets/whitepaper/private.svg'
import publicSale from '../../assets/whitepaper/public.svg';

const PresaleDetails = () => {
  return (
      <Container>
        <Title>Presale details</Title>
        <ImageContainer>
            <img src={privateSale} alt="private sale" className="anim_item"/>
            <img src={publicSale} alt="public sale" className="anim_item"/>
        </ImageContainer>
    </Container>
  )
}

export default PresaleDetails