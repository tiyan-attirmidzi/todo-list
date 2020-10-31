import { css } from "@emotion/core";

export const todo = theme => {
    return css`
        position: relative;
        flex: 1 0 auto;
        text-align: center;
        max-height: 34px;
        margin: 16px 0 0;
        font-family: 'Indie Flower', cursive;
        font-size: 24px;
        border-bottom: 1px solid ${theme.color.primary.black};
    `;
}
  
export const todoText = ({ isComplated }) => {
    return css`
        width: 100%;
        height: 50px;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        text-decoration: ${isComplated ? "line-through" : "initial" }
    `;
}