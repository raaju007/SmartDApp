import { AccordionContainer, AccordionHeader, AccordionText, AccordionTitle } from './styled'
import React, {useState} from 'react'

import minus from '../../../assets/icons/minus.png'
import plus from '../../../assets/icons/plus.png'

const Accordion = ({title, text, isPopular = false}) => {
    const [open, setOpen] = useState(false)

    return (
        <AccordionContainer open={open} >
          <AccordionHeader open={open} onClick={() => setOpen(!open)}>
            <div>
              <img src={open ? minus : plus} alt="FAQ" />
            </div>
            <AccordionTitle >{title}</AccordionTitle>
          </AccordionHeader>
          <AccordionText open={open}>
           {text}
          </AccordionText>
        </AccordionContainer>
    )
}

export default Accordion