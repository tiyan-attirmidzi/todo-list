import { css } from "@emotion/core";

export const addInput = ({ theme }) => {
    return css`
        background: unset;
        border: unset;
        padding: 0 64px;
        border-bottom: 1px solid ${theme.color.primary.black};
        outline: unset;
        font-family: 'Handlee', cursive;
        font-size: 16px;
        width: 100%;
    `;
}