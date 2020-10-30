import { css } from "@emotion/core";

export const button = ({ color, align }) => {
    let textColor;
    switch(color) {
        case "red":
            textColor = '#e06262';
            break;
        default:
            textColor = '#2d2d2d';
            break;
    }
    return css`
        font-size: 1.8rem;
        font-family: 'Handlee', cursive;
        color: ${ textColor };
        width: 24%;
        padding: 16px;
        cursor: pointer;
        background: unset;
        border: unset;
        outline: unset;
        text-align: ${ align };
    `;
} 