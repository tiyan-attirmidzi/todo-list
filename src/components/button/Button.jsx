import React from "react";
import PropTypes from 'prop-types';
import styles from './button.module.css';
import cns from 'classnames';

const Button = ({ text, onClick, color, align }) => {

    // const classNames = [
    //     styles.headerBtn,
    //     color === "black" && styles.mainBlackColor,
    //     color === "red" && styles.mainRedColor,
    //     align === "left" && styles.alignLeft,
    //     align === "right" && styles.alignRight
    // ].join(" ");

    const classNames = cns(styles.headerBtn, {
        [styles.mainBlackColor]: color === "black", 
        [styles.mainRedColor]: color === "red", 
        [styles.alignLeft]: align === "left", 
        [styles.alignRight]: align === "right", 
    });

    return <button className={ classNames } onClick={ onClick }>{ text }</button>

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