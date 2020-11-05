import { css } from "@emotion/core";

export const button = ({ color, align, theme }) => {
    let textColor;
    const { color: { primary} } = theme;
    switch(color) {
        case "red":
            textColor = primary.red;
            break;
        default:
            textColor = primary.black;
            break;
    }
    return css`
        font-size: 1.8rem;
        font-family: 'Handlee', cursive;
        color: ${ textColor };
        padding: 16px;
        cursor: pointer;
        background: unset;
        border: unset;
        outline: unset;
        text-align: ${ align };
    `;
} 