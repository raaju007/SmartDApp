import {Block, SocialButton} from './styled'

import React from 'react'
import dribble from '../../../assets/icons/dribble.svg'
import telegram from '../../../assets/icons/telegramBlack.svg'
import twitter from '../../../assets/icons/twitter.svg'

const SocialBlock = () => {
  return (
    <Block>
        <SocialButton>
            <img src={telegram} alt="telegram" />
        </SocialButton>
        <SocialButton>
            <img src={twitter} alt="telegram" />
        </SocialButton>
        <SocialButton>
            <img src={dribble} alt="telegram" />
        </SocialButton>
    </Block>
  )
}

export default SocialBlock