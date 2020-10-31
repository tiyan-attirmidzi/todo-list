import React from "react";
import PropTypes from 'prop-types';
import Button from '../button/Button';
// import styles from './header.module.css';
import * as styles from './header.styles';
import { useTheme } from 'emotion-theming';

const Header = ({ showAddToggle, showAdd, clearTodo }) => {

    const theme = useTheme();

    return (
        <section css={ styles.header }>
            <Button onClick={ showAddToggle } text={ showAdd ? "Finish" : "Add" } color="black" align="left"/>
            <h1 css={ styles.headerTitle(theme) }>Todo Lists</h1>
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