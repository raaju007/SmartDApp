import {css} from 'styled-components'

const baseSize = 16
const maxViewport = 1440

const mixins = {
    transition: ( time = '0.25s', type = 'linear') => css`
        transition: ${time} ${type};
    `,
    font: (color, size = baseSize, family, line) => css`
        color: ${color || "red"};
        font-size: ${mixins.pxToRem(size)};
        font-family: ${family || "Helvetica neue"};
        line-height: ${line || size * 1.2};
    `,
    flex: (justify, align, direction) => css`
        display: flex;
        justify-content: ${justify || "flex-start"};
        align-items: ${align || "start"};
        flex-direction: ${direction || "row"};
    `,
    pxToRem: (px) => {
        return `${px / baseSize}rem`
    },
    responsiveText: (mobSize, pcSize)=> css`
        font-size: ${`calc(${mobSize}px + ${pcSize - mobSize} * (100vw / ${maxViewport}))`};

        @media screen and (max-width: 767px) {
            font-size: ${`calc(${mobSize}px + (${pcSize - mobSize} + ${pcSize - mobSize} * 0.7) * ((100vw - 320px) / ${maxViewport}))`};
        }
    `
}

export default mixins