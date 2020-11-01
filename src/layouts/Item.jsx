// import React from "react";
import PropTypes from 'prop-types';
import { /*jsx,*/ css } from "@emotion/core";


const Item = ({ children, flex, textAlign, padding }) => {
    return (
        <div className="flex-item" css={ css`
            flex: ${flex}; 
            text-align: ${textAlign};
            padding: ${padding};` 
        }>
            { children }
        </div>
    );
}

Item.defaultProps = {
    align: "left",
    padding: "unset"
};

Item.propsTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    flex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    textAlign: PropTypes.oneOf([
        "center",
        "left",
        "right",
        "justify"
    ]),
    padding: PropTypes.string
};

export default Item;