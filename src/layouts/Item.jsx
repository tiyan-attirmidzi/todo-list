// import React from "react";
import PropTypes from 'prop-types';
import { jsx, css } from "@emotion/core";


const Item = ({ children, flex }) => {
    return (
        <div className="flex-item" css={ css`flex: ${flex}` }>
            { children }
        </div>
    );
}

Item.propsTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    flex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

export default Item;