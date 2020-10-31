import { css } from "@emotion/core";

export const todos = () => {
    return css`
        display: flex;
        flex-direction: column;
        min-height: 500px; 
    `;
}

export const todoPlaceholderText = () => {
    return css`
        font-family: 'Indie Flower', cursive;
        font-size: 24px;
        padding: 16px;
        text-align: center; 
    `;
}

export const addButtonPlaceholderText = () => {
    return css`
        font-family: 'Handlee', cursive;
        font-size: 24px;
        font-weight: bold;
    `;
}