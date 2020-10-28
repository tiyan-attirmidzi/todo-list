import React from "react";
import PropTypes from 'prop-types';
import Button from '../button/Button';
import styles from './header.module.css';

const Header = ({ showAddToggle, showAdd, clearTodo }) => {
    return (
        <section className={ styles.header }>
            <Button onClick={ showAddToggle } text={ showAdd ? "Finish" : "Add" } color="black" align="left"/>
            <h1 className={ styles.headerTitle }>Todo Lists</h1>
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