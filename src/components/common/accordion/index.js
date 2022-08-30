import { AccordionContainer, AccordionHeader, AccordionText, AccordionTitle } from './styled'
import React, {useState} from 'react'

import arrow from '../../../assets/icons/arrowUp.svg'

const Accordion = ({title, text, isPopular = false}) => {
    const [open, setOpen] = useState(false)

    return (
        <AccordionContainer >
          <AccordionHeader open={open} onClick={() => setOpen(!open)}>
            <AccordionTitle open={open}>{title} {isPopular&& <span>POPULAR</span>}</AccordionTitle>
            <img src={arrow} alt="arrow-up" />
          </AccordionHeader>
          <AccordionText open={open}>
           {text}
          </AccordionText>
        </AccordionContainer>
    )
}

export default Accordion