import { Container, SubText, Title, TokenomicsContainer, Wrapper } from './styled'

import React from 'react'
import buyTax from '../../assets/whitepaper/buyTax.svg';
import sellTax from '../../assets/whitepaper/sellTax.svg';

const Tokenomics = () => {
  
  return (
    <Container id="tokenomics" className="container">
      <Title position="left" marginB="60px">Tokenomics</Title>
      <Wrapper>
        <SubText>1,000,000,000 Total Supply 39.6% private + public sale 4% marketing/development/team 55.4% liquidity</SubText>     
        <TokenomicsContainer>
            <img src={buyTax} alt="buy tax" className="anim_item"/>
            <img src={sellTax} alt="sell tax" className="anim_item"/>
        </TokenomicsContainer>
      </Wrapper>
    </Container>
  ) 
}

export default Tokenomics