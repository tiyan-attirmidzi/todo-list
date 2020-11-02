import React from "react";
import PropTypes from 'prop-types';
// import styles from './button.module.css';
// import cns from 'classnames';
import * as styles from './button.styles';
import { useTheme } from 'emotion-theming';

const Button = ({ text, onClick, color, align }) => {

    /*
        option 1 defult
        const classNames = [
            styles.headerBtn,
            color === "black" && styles.mainBlackColor,
            color === "red" && styles.mainRedColor,
            align === "left" && styles.alignLeft,
            align === "right" && styles.alignRight
        ].join(" ");
    */

    /*
        option 2 css module
        const classNames = cns(styles.headerBtn, {
            [styles.mainBlackColor]: color === "black", 
            [styles.mainRedColor]: color === "red", 
            [styles.alignLeft]: align === "left", 
            [styles.alignRight]: align === "right", 
        });
        return <button className={ classNames } onClick={ onClick }>{ text }</button>
    */
    
    const theme = useTheme();
    return <button css={ styles.button({ color, align, theme }) } onClick={ onClick }>{ text }</button>

}

Button.propsTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["left", "right"])
}

Button.defaultProps = {
    text: "Button",
    color: "black",
    align: "left"
}

export default Button;