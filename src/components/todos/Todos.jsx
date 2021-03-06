import PropTypes from 'prop-types';
import React from "react";
import Todo from "../todo/Todo";
// import styles from "./todos.module.css";
import * as styles from './todos.styles';
import Container from '../../layouts/Container';

const Todos = ({ todos, complateTodo }) => {
    return (
        <section className="todos-component">
            <Container flexDirection="column" minHeight="500px">
            {
                todos.length > 0 && todos.map((todo, index) => {
                    return <Todo key={ index } text={ todo.text } isComplated={ todo.isComplated } complateTodo={ complateTodo } index={ index }/>
                })
            }
            {
                todos.length === 0 && (
                    <div css={ styles.todoPlaceholderText }>
                        Untuk membuat TODO baru silahkann klik tombol {" "} <span className={ styles.addButtonPlaceholderText }>Add</span>
                    </div>
                )
            }
            </Container>
        </section>
    );
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string1
    })),
    complateTodo: PropTypes.func.isRequired
};

export default Todos;