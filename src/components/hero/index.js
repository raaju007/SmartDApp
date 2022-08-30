import {Button, ButtonContainer, ButtonSolid, Container, Markup, Text, Title} from './styled'

import Header from '../header'
import React from 'react'
import arrow from '../../assets/icons/arrow.svg'
import chat from '../../assets/hero/chat.png'
import main from '../../assets/hero/main.png'
import pen from '../../assets/hero/pen.svg'
import scan from '../../assets/hero/bscScan.svg'
import telegram from '../../assets/icons/telegram.svg'
import tool from '../../assets/hero/tool.svg'

const Hero = () => {
  return (
    <Container id="home" className="anim_item">
        <Header/>
        <Title className="anim_item">Create a creative and stunning websites and Dapps with SmartDApp</Title>
        <Text className="anim_item">
          Discover the platform that gives you the freedom to create, design, manage and develop your web presence exactly the way you want.
        </Text>
        <ButtonContainer>
          <ButtonSolid>
            Telegram
            <div>
              <img src={telegram} alt="telegram"/>
            </div>
          </ButtonSolid>
          <Button>
            Get Started
            <div>
              <img src={arrow} alt="arrow"/>
            </div>
          </Button>
        </ButtonContainer>
    
        <Markup className="anim_item">
          <img src={tool} alt="tool" className="tool" />
          <img src={pen} alt="pen" className="pen" />
          <div>
            <img src={main} alt="main" className="main" />
            <img src={scan} alt="scan" className="scan" />
            <img src={chat} alt="chat" className="chat" />
          </div>
        </Markup>
    </Container>
  )
}

export default Hero