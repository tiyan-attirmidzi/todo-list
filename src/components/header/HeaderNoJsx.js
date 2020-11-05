import PropTypes from 'prop-types';
import Button from '../button/ButtonNoJsx';
// import styles from './header.module.css';
import * as styles from './header.styles';
import { useTheme } from 'emotion-theming';
import Container from '../../layouts/Container';
import Item from '../../layouts/Item';
import { jsx } from "@emotion/core";

const Header = ({ showAddToggle, showAdd, clearTodo }) => {
    const theme = useTheme();
    return jsx(
        "section", {
            className: "header-component"
        }, jsx(
            Container, {
                alignItems: "flex-start"
            }, jsx(
                Item, {
                    flex: 1
                }, jsx(
                    Button, {
                        onClick: showAddToggle ,
                        text: showAdd ? "Finish" : "Add" ,
                        color: "black",
                        align: "left"
                    }
                )
            ), jsx(
                Item, {
                    flex: 2
                }, jsx(
                    "h1", {
                        css: styles.headerTitle(theme)
                    }, "Todo Lists"
                )
            ), jsx(
                Item, {
                    flex: 1,
                    textAlign: "right"
                }, jsx(
                    Button, {
                        onClick: clearTodo ,
                        text: "Clear" ,
                        color: "red",
                        align: "right"
                    }
                )
            )
        )
    );
}

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodo: PropTypes.func.isRequired
}

export default Header;