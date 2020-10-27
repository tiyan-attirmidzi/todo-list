import PropTypes from 'prop-types';
import React from "react";
import Todo from "./Todo";

const Todos = ({ todos }) => {
    return (
        <section className="todos">
            {
                todos.map(todo => {
                    return <Todo text={todo.text}/>
                })
            }
        </section>
    );
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
    }))
};

export default Todos;