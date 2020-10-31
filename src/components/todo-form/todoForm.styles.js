import { css } from "@emotion/core";

export const add = () => {
    return css`
        padding: 16px; 
    `;
}

export const addForm = () => {
    return css`
        display: flex;
        align-items: center;
    `;
}

export const addInput = ({ theme }) => {
    return css`
        background: unset;
        border: unset;
        padding: 0 64px;
        flex: 1;
        border-bottom: 1px solid ${theme.color.primary.black};
        outline: unset;
        font-family: 'Handlee', cursive;
        font-size: 16px;
    `;
}

export const addBtn = ({ theme }) => {
    return css`
        font-size: 1.8rem;
        font-family: 'Handlee', cursive;
        padding: 16px;
        padding-right: unset;
        cursor: pointer;
        background: unset;
        border: unset;
        outline: unset;
        &:active {
            1px 1px 2px ${theme.color.primary.black};
        }
    `;
}