import React from "react";
import PropTypes from 'prop-types';
import Button from './button/Button'

const Header = ({ showAddToggle, showAdd, clearTodo }) => {
    return (
        <section className="header">
            <Button onClick={ showAddToggle } text={ showAdd ? "Finish" : "Add" } color="black" align="left"/>
            <h1 className="header-title">Todo Lists</h1>
            <Button onClick={ clearTodo } text="Clear" color="red" align="right"/>
        </section>
    );
}

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodo: PropTypes.func.isRequired
}

export default Header;