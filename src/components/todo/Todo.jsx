import React from "react";
import PropTypes from 'prop-types';
// import styles from './todo.module.css';
import * as styles from './todo.styles';
import { useTheme } from 'emotion-theming';

const Todo = ({ text, complateTodo, index, isComplated }) => {

    const theme = useTheme();

    return (
        <div css={ styles.todo(theme) } onClick={ () => complateTodo(index) }>
            <span css={ styles.todoText({ isComplated }) } >{ text }</span>
        </div>
    );

}

Todo.propsType ={
    text: PropTypes.string.isRequired,
    complateTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isComplated: PropTypes.bool.isRequired 
}

export default Todo;