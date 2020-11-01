import { css } from "@emotion/core";

export const headerTitle = (theme) => {
    return css`
        text-align: center;
        color: ${theme.color.primary.black};
        font-size: 3.6rem;
        font-family: 'Indie Flower', cursive;
    `;
}