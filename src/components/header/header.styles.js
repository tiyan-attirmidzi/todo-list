import { css } from "@emotion/core";

export const header = () => {
    return css`
        display: flex;
        align-items: flex-start;
    `;
}
  
export const headerTitle = (theme) => {
    return css`
        width: 52%;
        text-align: center;
        color: ${theme.color.primary.black};
        font-size: 3.6rem;
        font-family: 'Indie Flower', cursive;
    `;
}