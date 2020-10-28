import PropTypes from 'prop-types';
import React from "react";
import Todo from "../todo/Todo";
import styles from "./todos.module.css";

const Todos = ({ todos, complateTodo }) => {
    return (
        <section className={ styles.todos }>
            {
                todos.length > 0 && todos.map((todo, index) => {
                    return <Todo key={ index } text={ todo.text } isComplated={ todo.isComplated } complateTodo={ complateTodo } index={ index }/>
                })
            }
            {
                todos.length === 0 && (
                    <div className={ styles.todoPlaceholderText }>
                        Untuk membuat TODO baru silahkann klik tombol {" "} <span className={ styles.addButtonPlaceholderText }>Add</span>
                    </div>
                )
            }
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