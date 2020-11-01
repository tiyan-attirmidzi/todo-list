import React from "react";
import PropTypes from 'prop-types';
import Button from '../button/Button';
// import styles from './header.module.css';
import * as styles from './header.styles';
import { useTheme } from 'emotion-theming';
import Container from '../../layouts/Container';
import Item from '../../layouts/Item';

const Header = ({ showAddToggle, showAdd, clearTodo }) => {

    const theme = useTheme();

    return (
        <section className="header-component">
            <Container alignItems="flex-start">
                <Item flex={1}>
                    <Button onClick={ showAddToggle } text={ showAdd ? "Finish" : "Add" } color="black" align="left"/>
                </Item>
                <Item flex={2}>
                    <h1 css={ styles.headerTitle(theme) }>Todo Lists</h1>
                </Item>
                <Item flex={1} textAlign="right">
                    <Button onClick={ clearTodo } text="Clear" color="red" align="right"/>
                </Item>
            </Container>
        </section>
    );

}

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodo: PropTypes.func.isRequired
}

export default Header;